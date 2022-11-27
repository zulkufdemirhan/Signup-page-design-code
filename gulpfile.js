const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./scss/index.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

exports.buildStyles = buildStyles;

function watch() {
  gulp.watch('./scss/**/*.scss', gulp.series('buildStyles'));
};

exports.watch = watch;