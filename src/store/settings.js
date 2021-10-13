import register from "./register.js";

// Initiate all default values
const BOUNDS = 2.2;
const CANVAS_HEIGHT = 500;
const CANVAS_WIDTH = 700;
const CENTER_LOCATION = [-1.8101000099, 0.000008760139975];
const COLOR_1 = [255, 0, 0, 255];
const COLOR_2 = [0, 255, 0, 255];
const COLOR_3 = [0, 0, 255, 255];
const COLOR_4 = [255, 255, 0, 255];
const MAX_ITERATIONS = 100;
const SPEED = 1.1;
const ZOOM_FACTOR = 125;

// Define all value
let animate,
		bounds,
		canvas,
		canvasHeight,
		canvasWidth,
	  centerLocation,
		color1,
	  color2,
	  color3,
	  color4,
	  maxIterations,
	  speed,
	  zoomFactor

// SETTERS

function setAnimate(toggle=false) {
	animate = toggle;
}

function setBounds(bound=null) {
	bounds = bound ? bound : BOUNDS;
	register.updateBounds(bounds);
}

function setCenterLocation(point=null) {
	centerLocation = point ? point : CENTER_LOCATION;
	register.udpateCenter(centerLocation);
}

function setCenterFromCanvasCoordinates(x, y) {
	const newX = (x - canvasWidth / 2) / zoomFactor + centerLocation[0];
	const newY = (-y + canvasHeight / 2) / zoomFactor + centerLocation[1];
	setCenterLocation([newX, newY]);
}

function setCanvas(canvasElement) {
	canvas = canvasElement;
}

function setCanvasHeight(height=null) {
	canvasHeight = height ? height : CANVAS_HEIGHT;
	canvas.height = canvasHeight;
}

function setCanvasWidth(width=null) {
	canvasWidth = width ? width : CANVAS_WIDTH;
	canvas.width = canvasWidth;
}

function setColor1(rgba=null) {
	color1 = rgba ? rgba : COLOR_1;
	register.updateColor1(color1);
}	

function setColor2(rgba=null) {
	color2 = rgba ? rgba : COLOR_2;
	register.updateColor2(color2);
}	

function setColor3(rgba=null) {
	color3 = rgba ? rgba : COLOR_3;
	register.updateColor3(color3);
}	

function setColor4(rgba=null) {
	color4 = rgba ? rgba : COLOR_4;
	register.updateColor4(color4);
}	

function setMaxIterations(max=null) {
	maxIterations = max ? max : MAX_ITERATIONS;
	register.updateMaxIterations(maxIterations);
}	

function setSpeed(value=null) {
	speed = value ? value : SPEED;
	register.updateSpeed(speed);
}

function setZoomFactor(zoom=null) {
	zoomFactor = zoom ? zoom : ZOOM_FACTOR;
	register.updateZoom(zoomFactor);
}

// Define all getters
function getAnimate() {
	return animate;
}

function getBounds() {
	return bounds;
}

function getCanvas() {
	return canvas;
}

function getCanvasHeight() {
	return canvasHeight;
}

function getCanvasWidth() {
	return canvasWidth;
}

function getCenterLocation() {
	return centerLocation;
}

function getColor1() {
	return color1;
}

function getColor2() {
	return color2;
}

function getColor3() {
	return color3;
}

function getColor4() {
	return color4;
}

function getMaxIterations() {
	return maxIterations;
}

function getSpeed() {
	return speed;
}

function getZoomFactor() {
	return zoomFactor;
}

function increaseZoomFactor() {
	const newZoom = zoomFactor * speed;
	setZoomFactor(newZoom)
	if(zoomFactor > 100000000000000000 || zoomFactor < 50) {
		setSpeed(1 / speed);
	}
}

// Initiate all values
function setAllValuesToDefault() {
	setAnimate()
	setBounds();
	setCanvasHeight();
	setCanvasWidth();
	setCenterLocation();
	setColor1();
	setColor2();
	setColor3();
	setColor4();
	setMaxIterations();
	setZoomFactor();
	setSpeed();
}

function init(canvas) {
	setCanvas(canvas)
	setAllValuesToDefault();
}

export default {
	init,
	setAllValuesToDefault,
	setAnimate,
	setBounds,
	setCanvas,
	setCanvasHeight,
	setCanvasWidth,
	setCenterLocation,
	setColor1,
	setColor2,
	setColor3,
	setColor4,
	setMaxIterations,
	setSpeed,
	setZoomFactor,
	getAnimate,
	getBounds,
	getCanvas,
	getCanvasHeight,
	getCanvasWidth,
	getCenterLocation,
	setCenterFromCanvasCoordinates,
	getColor1,
	getColor2,
	getColor3,
	getColor4,
	getMaxIterations,
	getSpeed,
	getZoomFactor,
	increaseZoomFactor,
}