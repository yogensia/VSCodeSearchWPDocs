'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

/**
 * Compile sass.
 */
gulp.task('sass', function () {
  return gulp
    .src('styles/sass/*.scss')
    .pipe(sass.sync({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./styles/'));
});