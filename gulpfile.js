const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-ruby-sass');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css'); 
const cache = require('gulp-cached');
const fs = require('fs');

const paths = {
  sass: "./public/scss/**/*.scss",
  js: "./public/js/**/*.js",
  html: "./views/*.html"
}

gulp.task('convertcss', () => {
  return sass(paths.sass)
          .on('error', sass.logError)
          .pipe(cache('csscache'))
          .pipe(cleanCSS({compatibility: 'ie8'}))
          .pipe(gulp.dest('./public/css'))
          .pipe(browserSync.stream())
});

gulp.task('browser-sync', () => {
  browserSync.init({
        proxy: "localhost:8080"
    });
});

gulp.task('watch', () => {
    gulp.watch(paths.html, () => {
        browserSync.reload()
    })

    gulp.watch(paths.js, () => {
        browserSync.reload()
    })

    gulp.watch(paths.sass, ['convertcss'])
    
});

gulp.task('default', ['browser-sync', 'watch'])