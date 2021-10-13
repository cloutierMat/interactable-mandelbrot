import { generateColorSet } from "../animation/colorSet.js";
import menu from "../controller/menu.js"

function rgbToHex ([r, g, b]) {
	return '#' + [r, g, b].map(x => {
  	const hex = x.toString(16)
  	return hex.length === 1 ? '0' + hex : hex
	}).join('')
}

function rgbToString(){}

function updateBounds(bounds) {
	menu.boundsCurrent.innerText = bounds;
	menu.boundsInput.value = bounds;
}

function udpateCenter(center) {
	menu.centerCurrent.innerText = center;
	menu.centerInputX.value = center[0];
	menu.centerInputY.value = center[1];
}

function updateColor1(color) {
	const hexColor = rgbToHex(color);
	menu.color1Current.style.backgroundColor = hexColor;
	menu.color1Input.value = hexColor;
}

function updateColor2(color) {
	const hexColor = rgbToHex(color);
	menu.color2Current.style.backgroundColor = hexColor;
	menu.color2Input.value = hexColor;
}

function updateColor3(color) {
	const hexColor = rgbToHex(color);
	menu.color3Current.style.backgroundColor = hexColor;
	menu.color3Input.value = hexColor;
}

function updateColor4(color) {
	const hexColor = rgbToHex(color);
	menu.color4Current.style.backgroundColor = hexColor;
	menu.color4Input.value = hexColor;
}

function updateMaxIterations(max) {
	generateColorSet()
	menu.maxIterationsCurrent.innerText = max;
	menu.maxIterationsInput.value = max;
}

function updateSpeed(speed) {
	menu.speedCurrent.innerText = speed;
	menu.speedInput.value = speed;
}

function updateZoom(zoom) {
	menu.zoomCurrent.innerText = zoom;
	menu.zoomInput.value = zoom;
}

export default {
	updateBounds,
	udpateCenter,
	updateColor1,
	updateColor2,
	updateColor3,
	updateColor4,
	updateMaxIterations,
	updateSpeed,
	updateZoom,
}