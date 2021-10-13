import settings from "./settings.js";
import { computeCanvas } from "./mandelbrot.js";
import canvas from "./canvas.js";
import menu from "./menu.js";

// Canvas setup
const canvasElement = document.getElementById("canvas");
settings.init(canvasElement);
canvas.init(canvasElement)


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