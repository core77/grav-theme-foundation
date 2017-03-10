'use strict';

var browserSync = require('browser-sync').create();
var concat      = require('gulp-concat');
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var watch       = require('gulp-watch');


gulp.task('browser-sync', function() {
    browserSync.init({
      open: false,
      proxy: "localhost"
    });
});

gulp.task('default', ['sass', 'browser-sync', 'watch']);

gulp.task('sass', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', ['browser-sync'], function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});
