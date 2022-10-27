const gulp = require("gulp");
const less = require("gulp-less");
const LessAutoprefix = require("less-plugin-autoprefix");
const rename = require('gulp-rename');

const autoprefix = new LessAutoprefix({ browsers: ["last 2 versions"] });

const compileLess = function () {
	return gulp
		.src(["projects/**/*.less"])
		.pipe(
			less({
				plugins: [autoprefix],
			})
		)
        .pipe(rename(function (path) {
            path.basename += "-less";
        }))
        .pipe(gulp.dest(function (f) {
            return f.base;
        }))
};

module.exports = { compileLess };
