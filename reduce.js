var imagemin = require("imagemin"),
	jpegRecompress = require("imagemin-jpeg-recompress");

imagemin(["img/*.jpg"], "optimg", {
	plugins: [
		jpegRecompress({
			accurate: true,
			max: 70
		})
	]
});