import registry from "../store/registry.js";
import settings from "../store/settings.js"

const centerInputX = document.getElementById("x-input");
const centerInputY = document.getElementById("y-input");
const speedInput = document.getElementById("speed-input");
const maxIterationsInput = document.getElementById("max-iterations-input");
const zoomInput = document.getElementById("zoom-input");
const boundsInput = document.getElementById("bounds-input");
const color1Input = document.getElementById("color-1-input");
const color2Input = document.getElementById("color-2-input");
const color3Input = document.getElementById("color-3-input");
const color4Input = document.getElementById("color-4-input");

const boundsReset = document.getElementById("bounds-reset");
const centerReset = document.getElementById("center-reset");
const colorReset = document.getElementById("color-reset");
const maxIterationsReset = document.getElementById("max-iterations-reset");
const speedReset = document.getElementById("speed-reset");
const zoomReset = document.getElementById("zoom-reset");

const speedInvert = document.getElementById("speed-invert");

const submitButton = document.getElementById("submit-button");
const animateButton = document.getElementById("animate-button");
const resetButton = document.getElementById("reset-button");

// transform the color format
function rgbToHex ([r, g, b]) {
	return '#' + [r, g, b].map(x => {
		const hex = x.toString(16)
		return hex.length === 1 ? '0' + hex : hex
	}).join('')
}

function hexToRGB(hexColor){
	let hex = "0x" + hexColor.substr(1);
  return [
		(hex >> 16),
		(hex >> 8) & 0xFF,
		hex & 0xFF,
		255
	]
}

// Register all field to listen to udpdate events

registry.addListener('updateBounds', bounds => {
	boundsInput.value = bounds;
})

registry.addListener('updateCenter', center => {
	centerInputX.value = center[0];
	centerInputY.value = center[1];
})

registry.addListener('updateColor1', color => {
	const hexColor = rgbToHex(color);
	color1Input.value = hexColor;
})

registry.addListener('updateColor2', color => {
	const hexColor = rgbToHex(color);
	color2Input.value = hexColor;

})

registry.addListener('updateColor3', color => {
	const hexColor = rgbToHex(color);
	color3Input.value = hexColor;

})

registry.addListener('updateColor4', color => {
	const hexColor = rgbToHex(color);
	color4Input.value = hexColor;

})

registry.addListener('updateMaxIterations', max => {
	maxIterationsInput.value = max;
})

registry.addListener('updateSpeed', speed => {
	speedInput.value = speed;
})

registry.addListener('updateZoom', zoom => {
	zoomInput.value = zoom;
})

boundsReset.onclick = () => {
	settings.setBounds();
}

centerReset.onclick = () => {
	settings.setCenterLocation();
}

colorReset.onclick = () => {
	settings.setColor1();
	settings.setColor2();
	settings.setColor3();
	settings.setColor4();
}

maxIterationsReset.onclick = () => {
	settings.setMaxIterations();
}

speedReset.onclick = () => {
	settings.setSpeed();
}

zoomReset.onclick = () => {
	settings.setZoomFactor();
}

speedInvert.onclick = () => {
	settings.setSpeed(1 / settings.getSpeed());
}

submitButton.onclick = (e) => {
	e.preventDefault();
	settings.preventRedraw();
	settings.setBounds(Number(boundsInput.value));
	settings.setCenterLocation([Number(centerInputX.value), Number(centerInputY.value)]);
	settings.setColor1(hexToRGB(color1Input.value));
	settings.setColor2(hexToRGB(color2Input.value));
	settings.setColor3(hexToRGB(color3Input.value));
	settings.setColor4(hexToRGB(color4Input.value));
	settings.setMaxIterations(Number(maxIterationsInput.value));
	settings.setSpeed(Number(speedInput.value));
	settings.setZoomFactor(Number(zoomInput.value));
	settings.enableRedraw();
	submitButton.blur();
}

animateButton.onclick = (e) => {
	e.preventDefault();
	settings.setAnimate(!settings.getAnimate());
	animateButton.blur();
}

resetButton.onclick = (e) => {
	e.preventDefault();
	settings.setAllValuesToDefault();
	resetButton.blur();
}