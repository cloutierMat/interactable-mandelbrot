import settings from "./store/settings.js";
import { computeCanvas } from "./animation/mandelbrot.js";
import canvas from "./animation/canvas.js";
import "./controller/menu.js";

// Canvas setup
const canvasElement = document.getElementById("canvas");
settings.init(canvasElement);
canvas.init(canvasElement)
settings.setCenterLocation([-1.8101000099, 0.000008760139975]);


// Draw a new frame
function draw() {
	const pixels = computeCanvas();
	canvas.draw(pixels);
	if(settings.getAnimate()) {
		settings.increaseZoomFactor();
		requestAnimationFrame(draw);
	}
}
draw()

//
// CONTROLLERS
//

// Keyboard Press
window.addEventListener("keypress", (e) => {
	if(e.code === "Space") {
		settings.setAnimate(!settings.getAnimate());
		if(settings.getAnimate()) {
			draw();
		}
	}
})

// Mouse Click
canvasElement.addEventListener("click", (e) => {
	settings.setCenterFromCanvasCoordinates(e.layerX, e.layerY)
	if(!settings.getAnimate()) {
		draw();
	}
})