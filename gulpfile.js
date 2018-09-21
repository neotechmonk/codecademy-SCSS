// Sass configuration
// var gulp = require('./node_modules/gulp/bin/gulp.js');
var gulp = require('gulp');
var sass = require('gulp-sass');

// var sass = require('./node_modules/gulp-sass/index.js');

gulp.task('sass', function() {
    gulp.src('*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});

gulp.task('default', ['sass'], function() {
    gulp.watch('*.scss', ['sass']);
})