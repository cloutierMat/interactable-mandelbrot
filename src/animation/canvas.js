let context;

function createImageData(width) {
	return context.createImageData(width, 1);
}

function putImageData(lineData, yPostion) {
	context.putImageData(lineData, 0, yPostion)
}

function init(canvas) {
	context = canvas.getContext('2d');
}

export default {
	init,
	createImageData,
	putImageData
};