let canvas;
let context;
let width;
let height

function setSize(newWidth, newHeight) {
	width = newWidth;
	height = newHeight;
	canvas.width = width;
	canvas.height = height;
}

function getImageData() {
	return context.getImageData(0, 0, canvas.width, canvas.height);
}

function getWidth() {
	return width;
}

function getHeight() {
	return height;
}

function draw(pixels) {
	context.clearRect(0, 0, canvas.width, canvas.height);
	try {
		const imageData = getImageData();
		pixels.forEach((pixel, index) => {
			imageData.data[index] = pixel;
		});
		context.putImageData(imageData, 0, 0);
	} catch (error) {
		console.log(error);
		alert("I am not feeling well!");
	}
}

function init(element, width, height) {
	canvas = element;
	context = canvas.getContext('2d');
	setSize(width, height);
}

export default {
	setSize,
	draw,
	init,
	getHeight,
	getWidth
};