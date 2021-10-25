import registry from "../../store/registry.js"

var logBase = 1.0 / Math.log(2.0);
var logHalfBase = Math.log(0.5)*logBase;

let colorBase = [255, 0, 0];

registry.addListener('updateColor1', color => {
	colorBase = color.slice(0, 3).map(color => color /255);
})

function smoothenColor(smoothing) {
	return colorBase.map(color => color * smoothing )
}

export default {
	get(lineData, offset, n, max, Tr, Ti) {
		if(n === max) {
			lineData.data[offset++] = 0;
			lineData.data[offset++] = 0;
			lineData.data[offset++] = 0;
			lineData.data[offset++] = 255;
			return offset;
		}
		let smoothing = 5 + n - logHalfBase - Math.log(Math.log(Tr+Ti))*logBase;
		smoothing = Math.floor(360.0*smoothing/max);
		smoothing = smoothenColor(smoothing)
		lineData.data[offset++] = smoothing[0];
		lineData.data[offset++] = smoothing[1];
		lineData.data[offset++] = smoothing[2];
		lineData.data[offset++] = 255;
		return offset;
	}
}