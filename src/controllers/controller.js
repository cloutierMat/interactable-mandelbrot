import settings from "../store/settings.js"

// Keyboard Press
window.addEventListener("keydown", (e) => {
	if(e.code === "Space") {
		settings.setAnimate(!settings.getAnimate());
	} else if (e.code === "KeyH") {
		document.getElementById("help-modal").hidden = false;
	} else if (e.code === "Escape") {
		document.getElementById("help-modal").hidden = true;
	} else if (e.code === "KeyR") {
		settings.setAllValuesToDefault();
	}
})

// Mouse Click
document.getElementById("canvas").addEventListener("click", (e) => {
	settings.setCenterFromCanvasCoordinates(e.layerX, e.layerY)
})

// Touch Screen
document.getElementById("canvas").addEventListener("touchstart", () => {
		settings.setAnimate(!settings.getAnimate());
})