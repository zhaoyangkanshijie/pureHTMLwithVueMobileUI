var gulp = require('gulp'),
    sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	babel = require('gulp-babel'),
	uglify = require('gulp-uglify'),
	notify = require('gulp-notify'),
	rename = require('gulp-rename')

gulp.task('scripts', function() {
	gulp.src('./js/*.js')
		.pipe(babel())
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('./minjs'))
        .pipe(notify({
            message: 'script task completed'
        }));

});

gulp.task('styles', function() {
    gulp.src('./sass/*.scss')
        .pipe(sass())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(minifycss())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('./mincss'))
		.pipe(notify({
		    message: 'style task complete'
		}));
});

gulp.task('auto', function() {
    gulp.watch('./js/*.js', ['scripts']);
	gulp.watch('./sass/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'scripts', 'auto']);
