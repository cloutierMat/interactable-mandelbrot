import registry from "../../store/registry.js"
import colorGlow from "./glow.js"
import cottonCandy from "./cottonCandy.js"

export let colorize = (lineData, offset) => {
	lineData[offset++] = 0;
	lineData[offset++] = 0;
	lineData[offset++] = 0;
	lineData[offset++] = 255;
	return offset;
}

registry.addListener('updateColorScheme', scheme => {
	if(scheme === 'cottonCandy') {
		colorize = cottonCandy.get;
	} else if ( scheme === 'glow') {
		colorize = colorGlow.get;
	}
})