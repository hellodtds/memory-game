var log = console.log;

var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('default', function() {

// First: We need to transpile Sass into CSS
    gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));

// Second: We need a tool that adds vendor prefixes, like Auto-prefixer
    
    log('this works!');


});
