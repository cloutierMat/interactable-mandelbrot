import settings from "./store/settings.js";
import { mandelbrotLine } from "./animation/mandelbrot.js";
import canvas from "./animation/canvas.js";
import registry from "./store/registry.js";
import "./controllers/menu.js";
import "./controllers/controller.js"

// Canvas setup
const canvasElement = document.getElementById("canvas");
settings.init(canvasElement);
canvas.init(canvasElement)

let renderCount = 0;

// Draw a new frame
function draw() {
	let width = settings.getCanvasWidth();
	let height = settings.getCanvasHeight();
	let step = 1 / settings.getZoomFactor();
	let centerPoint = settings.getCenterLocation();
	let yPos = (-height / 2) * step - centerPoint[1];
	let xStart = (-width / 2) * step + centerPoint[0];
	let yArray = [...Array(height).keys()];
	yArray.sort(()=>0.5-Math.random());
	renderCount++;

	function drawLine(renderId) {
		if(renderId !== renderCount) {
			// only one render at a time
			return;
		}
		let lineRendered = yArray.pop();
		let yPos = (lineRendered - height / 2) * step - centerPoint[1];
		mandelbrotLine(lineRendered, yPos, xStart, step, width);
		if(yArray.length > 0) {
			if(yArray.length%100 !== 0) {
				drawLine(renderId)
			} else {
				setTimeout(()=>drawLine(renderId), 0);
			}
		} else {
			if(settings.getAnimate()) {
				settings.increaseZoomFactor();
				requestAnimationFrame(draw);
			}
		}
	}
	drawLine(renderCount);
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