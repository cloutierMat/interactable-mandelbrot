import colorGlow from "./glow.js"
import cottonCandy from "./cottonCandy.js"

let get = colorGlow.get;

function set(scheme, color1, color2, color3, color4, max) {
	if (scheme === "glow") {
		colorGlow.colorBase = color1;
		get = colorGlow.get;
	} else if (scheme === "cottonCandy") {
		cottonCandy.generateColorSet(max, color1, color2, color3, color4)
		get = cottonCandy.get
	}
}

export default {
	get,
	set
}