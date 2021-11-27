import settings from "./store/settings.js";
import canvas from "./animation/canvas.js";
import registry from "./store/registry.js";
import "./controllers/menu.js";
import "./controllers/controller.js"

let renderCount = 0;
let workers = [];
let activeWorkers = new Set();
let assignLine = () => {};

// Canvas setup
settings.init();

// Dev command to always enable max CPU thread.
// Not to keep for live version as not everybody might like the idea of a web app asking for all of their cpu resources
// settings.setWorkerCount(navigator.hardwareConcurrency);

// 
// Here we create and delete workers as needed by the application
function createWorkers(count) {
	workers = [];
	// Add workers if the total isn't on par with the new count
	for (let i = workers.length; i < count; i++) {
		workers.push(new Worker('src/animation/mandelbrotWorker.js', {type: 'module'}));
		// we create the listener immediately. the function assignLine will be defined in the draw function
		workers[i].onmessage = (message)=> {
			const {lineData, yPosition, renderId} = message.data;
			canvas.putImageData(lineData, yPosition);
			assignLine(i, renderId);
		};
	}
	// if the new worker count is lower than the previous count, delete the remaining ones
	for(let i = count; i < workers.length; i++) {
		workers[i].terminate();
	}
}

if(window.Worker) {
	createWorkers(settings.getWorkerCount())
}

// Draw a new frame
function draw() {
	let width = canvas.getWidth();
	let height = canvas.getHeight();
	let centerPoint = settings.getCenterLocation();
	let yArray = [...Array(Math.ceil(height/50)).keys()];
	
	renderCount++;
	assignLine = (worker, renderId) => {
		if(renderCount !== renderId || !workers[worker]) {
			// Stop rendering if the user called for a new frame or our worker no longer exists
			activeWorkers.delete(worker);
			return;
		}
		if(yArray.length > 0) {
			let lineRendered = yArray.shift()*50;
			workers[worker].postMessage(
				{
					lineData: canvas.createImageData(50),
					lineRendered,
					zoomFactor: settings.getZoomFactor(),
					width,
					height,
					centerPoint,
					bounds: settings.getBounds(),
					maxIterations: settings.getMaxIterations(),
					linePerWorker: 50,
					renderId,
					colorScheme: settings.getColorScheme(),
					color1: settings.getColor1(),
					color2: settings.getColor2(),
					color3: settings.getColor3(),
					color4: settings.getColor4(),
				}
			);
		} else {
			activeWorkers.delete(worker);
			if(activeWorkers.size === 0) {
				if(settings.getAnimate()) {
					settings.updateZoomFactor();
					requestAnimationFrame(draw);
				}
			}
		}
	}
	
	for(let i = 0; i < settings.getWorkerCount(); i++) {
		activeWorkers.add(i);
		assignLine(i, renderCount);
	}
}
draw()

// Register a force redraw event
registry.addListener('forceRedraw', () => {
	if(!settings.getAnimate() && settings.getRedrawIsEnabled()) {
		draw()
	}
})

// Register an event to restart the animation
registry.addListener('updateAnimate', (animate) => {
		if(animate) {
			draw()
		}
})

// Change the amount of webworkers
registry.addListener('updateWorkerCount', (count) => {
	createWorkers(count);
})