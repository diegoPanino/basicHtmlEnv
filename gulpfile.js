const gulp = require('gulp');
const less = require('./gulp/less');
const sass = require('./gulp/sass');

const watch = done => {
    gulp.watch(['projects/**/*.less'], less.compileLess);
    gulp.watch(['projects/**/*.scss'], sass.compileSass);
    done();
};

const compileStyle = gulp.series(watch);

exports.default = compileStyle;



