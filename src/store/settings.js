import registry from "./registry.js";

// Initiate all default values
const BOUNDS = 10;
const CENTER_LOCATION = [-1.8101000099, 0.000008760139975];
const COLOR_1 = [255, 0, 0, 255];
const COLOR_2 = [0, 255, 0, 255];
const COLOR_3 = [0, 0, 255, 255];
const COLOR_4 = [255, 255, 0, 255];
const COLOR_SCHEME = "glow"
const MAX_ITERATIONS = 250;
const SPEED = 1.1;
const WORKER_COUNT = 1;
const ZOOM_FACTOR = 120;

// Define all value
let animate,
		bounds,
		centerLocation,
		color1,
		color2,
		color3,
		color4,
		colorScheme,
		maxIterations,
		redrawIsEnabled,
		speed,
		workerCount,
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
	const newX = x  / zoomFactor + centerLocation[0];
	const newY = -y / zoomFactor + centerLocation[1];
	setCenterLocation([newX, newY]);
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

function setColorScheme(scheme=null) {
	colorScheme = scheme ? scheme : COLOR_SCHEME;
	registry.executeEvent('updateColorScheme', colorScheme)
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

function setWorkerCount(count=null) {
	workerCount = count ? count - 1 : WORKER_COUNT;
	registry.executeEvent('updateWorkerCount', workerCount);
}

function setZoomFactor(zoom=null) {
	zoomFactor = zoom ? Math.floor(zoom) : ZOOM_FACTOR;
	registry.executeEvent('updateZoom', zoomFactor);
	registry.executeEvent('forceRedraw');
}

function updateZoomFactor() {
	const newZoom = zoomFactor * speed;
	setZoomFactor(newZoom)
	if(zoomFactor > 10000000000000000 || zoomFactor < 50) {
		setSpeed( 1 / speed );
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

function getColorScheme() {
	return colorScheme;
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

function getWorkerCount() {
	return workerCount;
}

function getZoomFactor() {
	return zoomFactor;
}

// Initiate all values
function setAllValuesToDefault() {
	preventRedraw();
	setAnimate();
	setBounds();
	setCenterLocation();
	setColor1();
	setColor2();
	setColor3();
	setColor4();
	setColorScheme();
	setMaxIterations();
	setZoomFactor();
	setSpeed();
	enableRedraw();
}

function init() {
	setWorkerCount();
	setAllValuesToDefault();
}

export default {
	init,
	setAllValuesToDefault,
	setAnimate,
	setBounds,
	setCenterLocation,
	setColor1,
	setColor2,
	setColor3,
	setColor4,
	setColorScheme,
	setMaxIterations,
	setSpeed,
	setWorkerCount,
	setZoomFactor,
	getAnimate,
	getBounds,
	getCenterLocation,
	setCenterFromCanvasCoordinates,
	getColor1,
	getColor2,
	getColor3,
	getColor4,
	getColorScheme,
	getRedrawIsEnabled,
	getMaxIterations,
	getSpeed,
	getWorkerCount,
	getZoomFactor,
	updateZoomFactor,
	preventRedraw,
	enableRedraw
}