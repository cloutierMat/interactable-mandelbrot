import settings from "./settings.js";
import registry from "../store/registry.js";

// RULES

export function validateBonds(newBounds) {
	if (newBounds === settings.getBounds()) {
		registry.executeEvent('updateErrorMessage', "No changes were made to bounds.") 
		return false;
	};
	if (!(newBounds > 0)) {
		registry.executeEvent('updateErrorMessage', "Bounds must be greater than 0.");
		return false;
	}
	return true;
}

export function validateCenter(newX, newY) {
	if((!newX && newX !== 0) || (!newY && newY !== 0)) {
		registry.executeEvent('updateErrorMessage', "Both the real and imaginary part must be filled.")
		return false;
	}
	return true;
}

export function validateMaxIterations(newMax) {
	if(newMax < 1 || newMax > 10000) {
		registry.executeEvent('updateErrorMessage', "Please be reasonable and choose a value between 1 and 10,000!");
		return false;
	}
	return true;
}

export function validateSpeed(newSpeed) {
	if(newSpeed <= 0 || newSpeed > 1000) {
		registry.executeEvent('updateErrorMessage', "Please be reasonable and choose a value greater than 0 and smaller than 1,000!");
		return false;
	}
	return true;
}

export function validateZoom(newZoom) {
	if(newZoom < 1 || newZoom > 100000000000000000) {
		registry.executeEvent('updateErrorMessage', "Please be reasonable and choose a value greater than 1 and smaller than 100,000,000,000,000,000!");
		return false;
	}
	return true
}