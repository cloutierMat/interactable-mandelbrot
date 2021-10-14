import settings from "./store/settings.js";
import { computePixels } from "./animation/mandelbrot.js";
import canvas from "./animation/canvas.js";
import "./menu.js";
import "./store/rules.js"


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

export function redraw() {draw()}

//
// CONTROLLERS
//
function toggleAnimation() {
	settings.setAnimate(!settings.getAnimate());
	if(settings.getAnimate()) {
		draw();
	}	
}


// Keyboard Press
window.addEventListener("keypress", (e) => {
	if(e.code === "Space") {
		toggleAnimation()
	}
})

// Mouse Click
canvasElement.addEventListener("click", (e) => {
	settings.setCenterFromCanvasCoordinates(e.layerX, e.layerY)
	if(!settings.getAnimate()) {
		draw();
	}
})

// Touch Screen
canvasElement.addEventListener("touchstart", () => {
	toggleAnimation()
})