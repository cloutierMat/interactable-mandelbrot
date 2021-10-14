import menu from "../menu.js";
import settings from "./settings.js";
import {redraw} from "../script.js"

function redrawWhenNotAnimating() {
	if(!settings.getAnimate()) {
		redraw()
	}
}

function hexToRGB(hexColor){
	let hex = "0X" + hexColor.substr(1);
  return [
		(hex >> 16) & 0xFF,
		(hex >> 8) & 0xFF,
		(hex) & 0xFF,
		255
	]
}

menu.boundsButton.onclick = () => {
	let newBounds = parseFloat(menu.boundsInput.value);
	if (!(newBounds > 0)) {
		menu.setErrorMessage("Bounds must be greater than 0!");
		return;
	}	
	settings.setBounds(newBounds);
	redrawWhenNotAnimating();
}

menu.centerButton.onclick = () => {
	if( !menu.centerInputX.value || ! menu.centerInputY.value) {
		menu.setErrorMessage("Both value msut be entered to modify the center of the plot!");
	}
	settings.setCenterLocation([parseFloat(menu.centerInputX.value), parseFloat(menu.centerInputY.value)]);
	redrawWhenNotAnimating();
}

menu.color1Button.onclick = () => {
	settings.setColor1(hexToRGB(menu.color1Input.value));
	redrawWhenNotAnimating();
}

menu.color2Button.onclick = () => {
	settings.setColor2(hexToRGB(menu.color2Input.value));
	redrawWhenNotAnimating();
}

menu.color3Button.onclick = () => {
	settings.setColor3(hexToRGB(menu.color3Input.value));
	redrawWhenNotAnimating();
}


menu.color4Button.onclick = () => {
	settings.setColor4(hexToRGB(menu.color4Input.value));
	redrawWhenNotAnimating();
}

menu.maxIterationsButton.onclick = () => {
	let newMax = parseFloat(menu.maxIterationsInput.value);
	if(newMax < 10 || newMax > 1000000) {
		menu.setErrorMessage("Please be reasonable and choose a value between 10 and 1,000,000!");
	}
	settings.setMaxIterations(newMax);
	redrawWhenNotAnimating();
}

menu.speedButton.onclick = () => {
	let newSpeed = parseFloat(menu.speedInput.value);
	if(newSpeed <= 0 || newSpeed > 1000) {
		menu.setErrorMessage("Please be reasonable and choose a value greater than 0 and smaller than 1,000!");
	}
	settings.setSpeed(newSpeed);
	redrawWhenNotAnimating();
}

menu.zoomButton.onclick = () => {
	let newZoom = parseFloat(menu.zoomInput.value);
	if(newZoom < 1 || newZoom > 100000000000000000) {
		menu.setErrorMessage("Please be reasonable and choose a value greater than 1 and smaller than 100,000,000,000,000,000!");
	}
	settings.setZoomFactor(newZoom);
	redrawWhenNotAnimating();
}