import settings from "./store/settings.js";
import canvas from "./animation/canvas.js";
import registry from "./store/registry.js";
import "./controllers/menu.js";
import "./controllers/controller.js"

// Canvas setup
settings.init();
// Dev command to always enable max CPU thread.
// Not to keep for live version as not everybody might like the idea of a web app asking for all of their cpu resources
// settings.setWorkerCount(navigator.hardwareConcurrency);

// Create Workers
function createWorkers(count) {
	workers = [];
	for (let i = 0; i < count; i++) {
		workers.push(new Worker('src/animation/mandelbrotWorker.js', {type: 'module'}));
		workers[i].onmessage = (message)=> {
			canvas.putImageData(message.data[0], message.data[1])
			assignLine(i)
		};
	}
}

let renderCount = 0;
let workers = [];
let activeWorkers = new Set();
let assignLine = () => {};
if(window.Worker) {
	createWorkers(settings.getWorkerCount())
}

// Draw a new frame
function draw() {
	let width = canvas.getWidth();
	let height = canvas.getHeight();
	let centerPoint = settings.getCenterLocation();
	let yArray = [...Array(Math.ceil(height/15)).keys()];
	
	renderCount++;
	
	assignLine = (worker) => {
		if(yArray.length > 0) {
			let lineRendered = yArray.shift()*15;
			workers[worker].postMessage(
				[
					canvas.createImageData(15),
					lineRendered,
					settings.getZoomFactor(),
					width,
					height,
					centerPoint,
					settings.getBounds(),
					settings.getMaxIterations(),
					15
				]
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
		assignLine(i);
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