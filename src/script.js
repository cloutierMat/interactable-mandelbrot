import mandelbrot from "./mandelbrot.js";
import canvas from "./canvas.js";

// Canvas setup
const canvasElement = document.getElementById("canvas");
let canvasWidth = () => window.innerWidth;
let canvasHeight = () => window.innerHeight;

canvas.init(canvasElement, canvasWidth(), canvasHeight());


// Initiate mandelbrot settings
mandelbrot.setAll();

// Draw a new frame
function draw() {
	const width = canvas.getWidth();
	const height = canvas.getHeight();
	const pixels = mandelbrot.computeCanvas(width, height);
	canvas.draw(pixels);
}

// Resize the window
window.addEventListener("resize", () => {
	canvas.setSize(canvasWidth(), canvasHeight())
	draw()
})

draw()