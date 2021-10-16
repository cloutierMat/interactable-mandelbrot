import registry from "../../store/registry.js"
import colorGlow from "./colorGlow.js"
import cottonCandy from "./cottonCandy.js"

export let getColor = () => [0, 0, 0, 255]

registry.addListener('updateColorScheme', scheme => {
	if(scheme === 'cottonCandy') {
		getColor = cottonCandy.get;
	} else if ( scheme === 'glow') {
		getColor = colorGlow.get;
	}
})