var log = console.log;

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('default', function() {

// First: We need to transpile Sass into CSS
    gulp.src('sass/**/*.scss')
        .pipe(sass()).on('error', sass.logError)
// Second: We need a tool that adds vendor prefixes, like Auto-prefixer
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./css'));

    log('this works!');
    


});
