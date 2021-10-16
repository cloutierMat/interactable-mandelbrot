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
	get(n, max, Tr, Ti) {
		if(n === max) {
			return [0, 0, 0, 255]
		}
		let smoothing = 5 + n - logHalfBase - Math.log(Math.log(Tr+Ti))*logBase;
		smoothing = Math.floor(360.0*smoothing/max);
		// let smoothing = n / max * 255
		return [...smoothenColor(smoothing), 255];
	}
}