import updater from "./updater.js";

// Initiate all default values
const BOUNDS = 2.2;
const CANVAS_HEIGHT = 500;
const CANVAS_WIDTH = 700;
const CENTER_LOCATION = [0, 0];
const COLOR_1 = [255, 0, 0, 255];
const COLOR_2 = [0, 255, 0, 255];
const COLOR_3 = [0, 0, 255, 255];
const COLOR_4 = [255, 255, 0, 255];
const MAX_ITERATIONS = 200;
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
}

function setCenterLocation(point=null) {
	centerLocation = point ? point : CENTER_LOCATION;
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
}	

function setColor2(rgba=null) {
	color2 = rgba ? rgba : COLOR_2;
}	

function setColor3(rgba=null) {
	color3 = rgba ? rgba : COLOR_3;
}	

function setColor4(rgba=null) {
	color4 = rgba ? rgba : COLOR_4;
}	

function setMaxIterations(max=null) {
	maxIterations = max ? max : MAX_ITERATIONS;
	updater.updateMaxIterations();
}	

function setSpeed(value=null) {
	speed = value ? value : SPEED;
}

function setZoomFactor(zoom=null) {
	zoomFactor = zoom ? zoom : ZOOM_FACTOR;
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
	zoomFactor *= speed;
	if(zoomFactor > 100000000 || zoomFactor < 50) {
		speed *= -1;
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