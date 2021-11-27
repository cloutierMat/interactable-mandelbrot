var logBase = 1.0 / Math.log(2.0);
var logHalfBase = Math.log(0.5)*logBase;

let colorBase = [255, 0, 0];

function setColorBase(color) {
	colorBase = color;
}

function smoothenColor(smoothing) {
	return colorBase.map(color => color * smoothing )
}

function get(lineData, offset, n, max, Tr, Ti) {
	if(n === max) {
		lineData.data[offset++] = 0;
		lineData.data[offset++] = 0;
		lineData.data[offset++] = 0;
		lineData.data[offset++] = 255;
		return offset;
	}
	let smoothing = 5 + n - logHalfBase - Math.log(Math.log(Tr+Ti))*logBase;
	smoothing = Math.floor(360.0*smoothing/max);
	smoothing = smoothenColor(smoothing / 255)
	lineData.data[offset++] = smoothing[0];
	lineData.data[offset++] = smoothing[1];
	lineData.data[offset++] = smoothing[2];
	lineData.data[offset++] = 255;
	return offset;
}

export default {
	get,
	setColorBase
}