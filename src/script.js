import mandelbrot from "./mandelbrot.js";
import canvas from "./canvas.js";

// Canvas setup
const canvasElement = document.getElementById("canvas");
let canvasWidth = () => Math.min(window.innerWidth, 700);
let canvasHeight = () => Math.min(window.innerHeight, 500);

canvas.init(canvasElement, canvasWidth(), canvasHeight());


// Initiate mandelbrot settings
mandelbrot.setAll();
mandelbrot.setCenter([-1.8101000099, 0.000008760139975]);

// Draw a new frame
function draw() {
	const width = canvas.getWidth();
	const height = canvas.getHeight();
	const pixels = mandelbrot.computeCanvas(width, height);
	canvas.draw(pixels);
	mandelbrot.setZoom(1.1, false)
	requestAnimationFrame(draw)
}
draw()

//
// CONTROLLERS
//
// Resize the window
window.addEventListener("resize", () => {
	canvas.setSize(canvasWidth(), canvasHeight())
})