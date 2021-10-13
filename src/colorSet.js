let color1 = [255, 0, 0, 255];
let color2 = [0, 255, 0, 255];
let color3 = [0, 0, 255, 255];
let color4 = [255, 255, 0, 255];


let colorSet;

function	generateColorSet(max) {
	if (max < 10) {
		return "You must choose a value higher then 10.";
	}
	let step = Math.ceil(max / 10);
	let newSet = [];
	let i = 0
	while( i < step) {
		newSet[0 + 10 * i] = [
			color4[0],
			color4[1],
			color4[2],
			color4[3]
		];
		newSet[1 + 10 * i] = [
			color1[0],
			color1[1],
			color1[2],
			color1[3] / 5
		];
		newSet[2 + 10 * i] = [
			color1[0],
			color1[1],
			color1[2],
			color1[3] / 5
		];
		newSet[3 + 10 * i] = [
			color1[0],
			color1[1],
			color1[2],
			color1[3]
		];
		newSet[4 + 10 * i] = [
			color2[0],
			color2[1],
			color2[2],
			color2[3]
		];
		newSet[5 + 10 * i] = [
			color2[0],
			color2[1],
			color2[2],
			color2[3] / 2
		];
		newSet[6 + 10 * i] = [
			color2[0],
			color2[1],
			color2[2],
			color2[3] / 4
		];
		newSet[7 + 10 * i] = [
			color3[0],
			color3[1],
			color3[2],
			color3[3] / 4
		];
		newSet[8 + 10 * i] = [
			color3[0],
			color3[1],
			color3[2],
			color3[3]
		];
		newSet[9 + 10 * i] = [
			color3[0],
			color3[1],
			color3[2],
			color3[3] / 2
		];
		i++;
	}
	newSet[max] = [0, 0, 0, 255];
	colorSet = newSet
	return newSet;
}

function get(i) {
	return colorSet[i]
}

export default {
	get,
	generateColorSet
};