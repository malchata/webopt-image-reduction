"use strict";
var imagemin = require("imagemin"),
	jpegRecompress = require("imagemin-jpeg-recompress");

new imagemin().src("img/*.jpg").dest("optimg").use(jpegRecompress({
	accurate: true,
	max: 70
})).run();