import { getColor } from "./colors/index.js";
import settings from "../store/settings.js";

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

/**
 * Computes the values for each pixel on the canvas based on it's current state
 * @returns {number[]} pixels - Array containing RGBA value for each pixel
 */
export function computePixels() {
	// console.time()
	let pixels = []
	let width = settings.getCanvasWidth()
	let height = settings.getCanvasHeight()
	let step = 1 / settings.getZoomFactor()
	let boundsSquared = settings.getBounds() ** 2
	let maxIterations = settings.getMaxIterations()
	let centerPoint = settings.getCenterLocation()

	for (let y = 0; y < height; y++) {
		let yPos = (y - height / 2) * step - centerPoint[1]
		for (let x = 0; x < width; x++) {
			let xPos = (x - width / 2) * step + centerPoint[0]
			let [i, Tr, Ti] = iterateEquation(xPos, yPos, boundsSquared, maxIterations)
			pixels.push(...getColor(i, maxIterations, Tr, Ti));
		}
	}
	// console.timeEnd()
	return pixels
}