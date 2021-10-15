import settings from "./store/settings.js";
import { computePixels } from "./animation/mandelbrot.js";
import canvas from "./animation/canvas.js";
import registry from "./store/registry.js";
import "./controllers/menu.js";
import "./controllers/controller.js"

// Canvas setup
const canvasElement = document.getElementById("canvas");
settings.init(canvasElement);
canvas.init(canvasElement)

// Draw a new frame
function draw() {
	const pixels = computePixels();
	canvas.draw(pixels);
	if(settings.getAnimate()) {
		settings.increaseZoomFactor();
		requestAnimationFrame(draw);
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