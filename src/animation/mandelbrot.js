import color from "./colorSet.js"
import settings from "../store/settings.js";

function mandelbrotFormula(z, c) {
	// Computes Mandelbrot's formula
	let real = z[0] ** 2 - z[1] ** 2 + c[0];
	let imaginary = 2 * z[0] * z[1] + c[1];
	return [real, imaginary];
}

/**
 * Computes the values for each pixel on the canvas based on it's current state
 * @returns {number[]} pixels - Array containing RGBA value for each pixel
 */
export function computeCanvas() {
	// console.time();
	let pixels = [];
	let width = settings.getCanvasWidth();
	let height = settings.getCanvasHeight();
	let zoomFactor = settings.getZoomFactor();
	let bounds = settings.getBounds();
	let maxIterations = settings.getMaxIterations();
	let centerPoint = settings. getCenterLocation();
	for(let y = 0; y < height; y++) {
		let yPos = (y - height / 2) / zoomFactor - centerPoint[1];
		for(let x = 0; x < width; x++) {
			let xPos =  (x - width / 2)  / zoomFactor + centerPoint[0];
			const c = [xPos, yPos];
			let z = [0, 0];
			let i = 0;
			while (Math.abs(z[0]) < bounds && Math.abs(z[1]) < bounds && i < maxIterations) {
				z = mandelbrotFormula(z, c);
				i++;
			}
			pixels.push(...color.get(i));
		}
	}
	// console.timeEnd();
	return pixels;
}