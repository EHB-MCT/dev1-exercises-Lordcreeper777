"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let horizontallines = 60;
let verticallines = 30;

let width = 600;
let height = 300;

drawlines();

function drawlines() {
	context.fillStyle = "orange";
	context.fillRect(0, 0, width, height);
	context.strokeStyle = "white";
	context.lineWidth = 2;

	let xSpacing = width / horizontallines;
	let ySpacing = height / verticallines;

	for (let i = 0; i <= horizontallines; i++) {
		console.log(i);
		Utils.drawLine(i * xSpacing, 0, width - i * xSpacing, height);
	}

	for (let i = 0; i <= verticallines; i++) {
		Utils.drawLine(0, i * ySpacing, width, height - i * ySpacing);
	}
}
