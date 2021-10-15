import registry from "./store/registry.js";
import settings from "./store/settings.js"
import * as rules from "./store/rules.js";

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

const centerButton = document.getElementById("center-button");
const speedButton = document.getElementById("speed-button");
const maxIterationsButton = document.getElementById("max-iterations-button");
const zoomButton = document.getElementById("zoom-button");
const boundsButton = document.getElementById("bounds-button");
const color1Button = document.getElementById("color-1-button");
const color2Button = document.getElementById("color-2-button");
const color3Button = document.getElementById("color-3-button");
const color4Button = document.getElementById("color-4-button");

const centerCurrent = document.getElementById("center-current");
const speedCurrent = document.getElementById("speed-current");
const maxIterationsCurrent = document.getElementById("max-iterations-current");
const zoomCurrent = document.getElementById("zoom-current");
const boundsCurrent = document.getElementById("bounds-current");
const color1Current = document.getElementById("color-1-current");
const color2Current = document.getElementById("color-2-current");
const color3Current = document.getElementById("color-3-current");
const color4Current = document.getElementById("color-4-current");

const errorMessageBox = document.getElementById("error-message");

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
	boundsCurrent.innerText = bounds;
	boundsInput.value = bounds;
})

registry.addListener('updateCenter', center => {
	centerCurrent.innerText = center;
	centerInputX.value = center[0];
	centerInputY.value = center[1];
})

registry.addListener('updateColor1', color => {
	const hexColor = rgbToHex(color);
	color1Current.style.backgroundColor = hexColor;
	color1Input.value = hexColor;
})

registry.addListener('updateColor2', color => {
	const hexColor = rgbToHex(color);
	color2Current.style.backgroundColor = hexColor;
	color2Input.value = hexColor;

})

registry.addListener('updateColor3', color => {
	const hexColor = rgbToHex(color);
	color3Current.style.backgroundColor = hexColor;
	color3Input.value = hexColor;

})

registry.addListener('updateColor4', color => {
	const hexColor = rgbToHex(color);
	color4Current.style.backgroundColor = hexColor;
	color4Input.value = hexColor;

})

registry.addListener('updateMaxIterations', max => {
	maxIterationsCurrent.innerText = max;
	maxIterationsInput.value = max;
})

registry.addListener('updateSpeed', speed => {
	speedCurrent.innerText = speed;
	speedInput.value = speed;
})

registry.addListener('updateZoom', zoom => {
	zoomCurrent.innerText = zoom;
	zoomInput.value = zoom;
})

registry.addListener('updateErrorMessage', str => {
	errorMessageBox.innerText = str;
	setTimeout(() => {
		errorMessageBox.innerText = "";
	}, 5000);})

// validate result from each entry and update settings
boundsButton.onclick = () => {
	const newBounds = Number(boundsInput.value);
	if(rules.validateBonds(newBounds)) {
		settings.setBounds(newBounds);
	}
}

centerButton.onclick = () => {
	const newX = Number(centerInputX.value);
	const newY = Number(centerInputY.value);
	if(rules.validateCenter(newX, newY)) {
		settings.setCenterLocation([newX, newY]);
	}
}

color1Button.onclick = () => {
	settings.setColor1(hexToRGB(color1Input.value));
}

color2Button.onclick = () => {
	settings.setColor2(hexToRGB(color2Input.value));
}

color3Button.onclick = () => {
	settings.setColor3(hexToRGB(color3Input.value));
}

color4Button.onclick = () => {
	settings.setColor4(hexToRGB(color4Input.value));
}

maxIterationsButton.onclick = () => {
	const newMax = Number(maxIterationsInput.value);
	if(rules.validateMaxIterations(newMax)) {
		settings.setMaxIterations(newMax);
	}
}

speedButton.onclick = () => {
	const newSpeed = Number(speedInput.value);
	if(rules.validateSpeed(newSpeed)) {
		settings.setSpeed(newSpeed);
	}
}

zoomButton.onclick = () => {
	const newZoom = Number(zoomInput.value);
	if(rules.validateZoom(newZoom)) {
		settings.setZoomFactor(newZoom);
	}
}