import colorGlow from "./glow.js"
import cottonCandy from "./cottonCandy.js"

let selectedScheme = colorGlow;

let get = (...args) => {
	return selectedScheme.get(...args);
}

function set(scheme, color1, color2, color3, color4, max) {
	if (scheme === "glow") {
		colorGlow.setColorBase(color1);
		selectedScheme = colorGlow;
	} else if (scheme === "cottonCandy") {
		cottonCandy.generateColorSet(max, color1, color2, color3, color4)
		selectedScheme = cottonCandy;
	}
}

export default {
	get,
	set
}