import color from "./colors/index.js";


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

function mandelbrotLine(args) {
	let [
		lineData,
		lineRendered,
		zoomFactor,
		width,
		height,
		centerPoint,
		bounds,
		maxIterations,
		linePerWorker,
		renderId
	] = args.data;
	let offset = 0;
	let yPos;
	let boundsSquared = bounds ** 2;
	for (let y = 0; y < linePerWorker; y++) {
		yPos = (lineRendered + y - height / 2) / zoomFactor - centerPoint[1];
		for (let x = 0; x < width; x++) {
			let xPos = (x - width / 2) / zoomFactor + centerPoint[0];
			let [n, Tr, Ti] = iterateEquation(xPos, yPos, boundsSquared, maxIterations);
			offset = color.get(lineData, offset, n, maxIterations, Tr, Ti);
		}
	}
	self.postMessage({lineData, yPosition: lineRendered, renderId});
}

self.onmessage = mandelbrotLine;
