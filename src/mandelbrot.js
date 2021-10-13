import colorSet from "./colorSet.js";

// Mandelbrot settings
const MANDELBROT_DEFAULT_SETTINGS = {
	maxIterations: 100,
	bounds: 2,
	centerLocation: [0, 0],
	zoomFactor: 200,
};

let maxIterations;
let centerLocation;
let bounds;
let zoomFactor;

/**
 * Sets a new center point for the canvas
 * @param {number[]} [point] - An array of 2 numbers representing x & y coordinates
 */
function setCenter(point) {
		centerLocation = point ? point : MANDELBROT_DEFAULT_SETTINGS.centerLocation;
}

/**
 * Sets the max amount of iterations to find escaping iterations
 * @param {number} [iterations]
 */
function setMaxIterations(iterations) {
	maxIterations = iterations ? iterations : MANDELBROT_DEFAULT_SETTINGS.maxIterations;
}

/**
 * Sets the limit at wich point we consider an itereation to have escaped to infinity
 * @param {number} [bound]
 */
function setBounds(bound) {
	bounds = bound ? bound : MANDELBROT_DEFAULT_SETTINGS.bounds;
}

/**
 * Adjust the zoom ratio
 * @param {number} [value] - The new value for the zoom ratio
 * @param {boolean} [replace=true] - If set to false, the current zoom value will be multiplied by the first argument
 */
function setZoom(value, replace = true) {
	zoomFactor = value ? replace ? value : mandelbrotSettings * value : MANDELBROT_DEFAULT_SETTINGS.zoomFactor;
}

/**
 * Sets all values to default
 */
function setAll() {
	setBounds();
	setCenter();
	setMaxIterations();
	setZoom();
}

function mandelbrotRecursion(z, c) {
	let real = z[0] ** 2 - z[1] ** 2 + c[0];
	let imaginary = 2 * z[0] * z[1] + c[1];
	return [real, imaginary];
}

function computeCanvas(width, height) {
	let pixels = [];
	for(let y = 0; y < height; y++) {
		for(let x = 0; x < width; x++) {
			let xPos = (x - width  / 2) / zoomFactor + centerLocation[0];
			let yPos = (y - height / 2) / zoomFactor - centerLocation[0];
			const c = [xPos, yPos];
			let z = [0, 0];
			let i = 0;
			while (Math.abs(z[0]) < bounds && Math.abs(z[1]) < bounds && i < maxIterations) {
				z = mandelbrotRecursion(z, c);
				i++;
			}
			pixels.push(...colorSet[i.toString()]);
		}
	}
	return pixels;
}

const mandelbrot = {
	setAll,
	setMaxIterations,
	setBounds,
	setZoom,
	setCenter,
	computeCanvas
};

export default mandelbrot;