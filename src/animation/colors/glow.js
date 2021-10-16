var logBase = 1.0 / Math.log(2.0);
var logHalfBase = Math.log(0.5)*logBase;

export default {
		get(n, max, Tr, Ti) {
			if(n === max) {
				return [0, 0, 0, 255]
			}
			let smoothing = 5 + n - logHalfBase - Math.log(Math.log(Tr+Ti))*logBase;
			smoothing = Math.floor(540.0*smoothing/max);
			return [smoothing, smoothing, smoothing, 255]
			// if ( smoothing > 255 ) smoothing = 255;
			// return [smoothing**2/255, smoothing / 5, smoothing * 1.5, 255];
	}
}