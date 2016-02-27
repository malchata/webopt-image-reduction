"use strict";
var imagemin = require("imagemin"),
	webp = require("imagemin-webp");

new imagemin().src("img/*.png").dest("optimg").use(webp({
	lossless: true
})).run();