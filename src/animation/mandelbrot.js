import { colorize } from "./colors/index.js";
import settings from "../store/settings.js";
import canvas from "./canvas.js"

function iterateEquation(Cr, Ci, bounds, iterations) {
	let Zr = 0
	let Zi = 0
	let Tr = 0
	let Ti = 0
	let i = 0

	while (i < iterations && (Tr + Ti) < bounds) {
		Zi = 2 * Zr * Zi + Ci
		Zr = Tr - Ti + Cr
		Tr = Zr * Zr
		Ti = Zi * Zi
		i++
	}
	return [i, Tr, Ti];	
}

export function mandelbrotLine(lineRendered, yPos, xPos, step, width) {
	let lineData = canvas.createImageData(width);
	let offset = 0;
	let boundsSquared = settings.getBounds() ** 2
	let maxIterations = settings.getMaxIterations()
	for (let i = 0; i < width; i++) {
		let [n, Tr, Ti] = iterateEquation(xPos, yPos, boundsSquared, maxIterations)
		offset = colorize(lineData, offset, n, maxIterations, Tr, Ti);
		xPos += step;
	}
	canvas.putImageData(lineData, lineRendered);
}