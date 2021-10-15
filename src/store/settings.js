import registry from "./registry.js";

// Initiate all default values
const BOUNDS = 2.2;
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
		centerLocation,
		color1,
		color2,
		color3,
		color4,
		maxIterations,
		redrawIsEnabled,
		speed,
		zoomFactor

// SETTERS

function setAnimate(toggle=false) {
	animate = toggle;
	registry.executeEvent('updateAnimate', toggle)
}

function setBounds(bound=null) {
	bounds = bound ? bound : BOUNDS;
	registry.executeEvent('updateBounds', bounds);
	registry.executeEvent('forceRedraw');
}

function setCenterLocation(point=null) {
	centerLocation = point ? point : CENTER_LOCATION;
	registry.executeEvent('updateCenter', centerLocation);
	registry.executeEvent('forceRedraw');
}

function setCenterFromCanvasCoordinates(x, y) {
	const newX = (x - canvas.width / 2) / zoomFactor + centerLocation[0];
	const newY = (-y + canvas.height / 2) / zoomFactor + centerLocation[1];
	setCenterLocation([newX, newY]);
}

function setCanvas(canvasElement) {
	canvas = canvasElement;
}

function setCanvasSize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	registry.executeEvent('forceRedraw');
}

function setColor1(rgba=null) {
	color1 = rgba ? rgba : COLOR_1;
	registry.executeEvent('updateColor1', color1);
	registry.executeEvent('forceRedraw');
}	

function setColor2(rgba=null) {
	color2 = rgba ? rgba : COLOR_2;
	registry.executeEvent('updateColor2', color2);
	registry.executeEvent('forceRedraw');
}	

function setColor3(rgba=null) {
	color3 = rgba ? rgba : COLOR_3;
	registry.executeEvent('updateColor3', color3);
	registry.executeEvent('forceRedraw');
}	

function setColor4(rgba=null) {
	color4 = rgba ? rgba : COLOR_4;
	registry.executeEvent('updateColor4', color4);
	registry.executeEvent('forceRedraw');
}	

function setMaxIterations(max=null) {
	maxIterations = max ? max : MAX_ITERATIONS;
	registry.executeEvent('updateMaxIterations', maxIterations);
	registry.executeEvent('forceRedraw');
}	

function setSpeed(value=null) {
	speed = value ? value : SPEED;
	registry.executeEvent('updateSpeed', speed);
}

function setZoomFactor(zoom=null) {
	zoomFactor = zoom ? zoom : ZOOM_FACTOR;
	registry.executeEvent('updateZoom', zoomFactor);
	registry.executeEvent('forceRedraw');
}

function increaseZoomFactor() {
	const newZoom = zoomFactor * speed;
	setZoomFactor(newZoom)
	if(zoomFactor > 100000000000000000 || zoomFactor < 50) {
		setSpeed(1 / speed);
	}
}

function preventRedraw() {
	redrawIsEnabled = false;	
}

function enableRedraw() {
	redrawIsEnabled = true;
	registry.executeEvent('forceRedraw');
}

// GETTERS

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
	return canvas.height;
}

function getCanvasWidth() {
	return canvas.width;
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

function getRedrawIsEnabled() {
	return redrawIsEnabled;
}

function getSpeed() {
	return speed;
}

function getZoomFactor() {
	return zoomFactor;
}

// Initiate all values
function setAllValuesToDefault() {
	preventRedraw();
	setAnimate();
	setBounds();
	setCanvasSize();
	setCenterLocation();
	setColor1();
	setColor2();
	setColor3();
	setColor4();
	setMaxIterations();
	setZoomFactor();
	setSpeed();
	enableRedraw();
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
	setCanvasSize,
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
	getRedrawIsEnabled,
	getMaxIterations,
	getSpeed,
	getZoomFactor,
	increaseZoomFactor,
	preventRedraw,
	enableRedraw
}