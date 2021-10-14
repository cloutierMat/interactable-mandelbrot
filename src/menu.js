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

function setErrorMessage(str) {
	errorMessageBox.innerText = str;
	setTimeout(() => {
		errorMessageBox.innerText = "";
	}, 5000);
}

export default {
	centerInputX,
	centerInputY,
	speedInput,
	maxIterationsInput,
	zoomInput,
	boundsInput,
	color1Input,
	color2Input,
	color3Input,
	color4Input,
	centerButton,
	speedButton,
	maxIterationsButton,
	zoomButton,
	boundsButton,
	color1Button,
	color2Button,
	color3Button,
	color4Button,
	boundsCurrent,
	centerCurrent,
	color1Current,
	color2Current,
	color3Current,
	color4Current,
	maxIterationsCurrent,
	speedCurrent,
	zoomCurrent,
	setErrorMessage,
}