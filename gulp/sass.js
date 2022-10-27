const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

const compileSass = () => {
    return gulp
		.src(["projects/**/*.scss"])
		.pipe(
			rename(function (path) {
				path.basename += "-scss";
			})
		)
		.pipe(sass({ outputStyle: "expanded" }))
		.pipe(autoprefixer())
		.pipe(
			gulp.dest(function (f) {
				return f.base;
			})
		);
}

module.exports = { compileSass };