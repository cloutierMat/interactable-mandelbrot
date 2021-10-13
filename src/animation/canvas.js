import settings from "../store/settings.js"

let context;

function getImageData(width, height) {
	return context.getImageData(0, 0, width, height);
}

function draw(pixels) {
	let width = settings.getCanvasWidth()
	let height = settings.getCanvasHeight();
	context.clearRect(0, 0, width, height);
	try {
		const imageData = getImageData(width, height);
		pixels.forEach((pixel, index) => {
			imageData.data[index] = pixel;
		});
		context.putImageData(imageData, 0, 0);
	} catch (error) {
		console.log(error);
		alert("I am not feeling well!");
	}
}

function init(canvas) {
	context = canvas.getContext('2d');
}

export default {
	draw,
	init,
};