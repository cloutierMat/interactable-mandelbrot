import registry from "../store/registry.js";

const canvas = document.getElementById("canvas");

let width = 0;
let height = 0;
let context = canvas.getContext('2d');

function getWidth() {
	return width;
}

function getHeight() {
	return height;
}

function createImageData(lines) {
	return context.createImageData(width, lines);
}

function putImageData(lineData, yPostion) {
	context.putImageData(lineData, 0, yPostion)
}

function setSize() {
	let newWidth = Math.floor(window.innerWidth * 0.6);
	let newHeight = Math.floor(window.innerHeight * 0.8);
	if(newWidth !== width || newHeight !== height) {
		// Resize only if different
		width = newWidth;
		height = newHeight;
		canvas.width = width;
		canvas.height = height;
		registry.executeEvent('forceRedraw')
	}
}

export default {
	getWidth,
	getHeight,
	createImageData,
	putImageData,
};

// Resets canvas size if window gets resized
window.addEventListener("resize", setSize)
setSize()