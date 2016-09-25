var imagemin = require("imagemin"),
	webp = require("imagemin-webp");

imagemin(["img/*.png"], "optimg", {
	plugins: [webp({
		lossless: true
	})]
});