var log = console.log;

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var jasmineBrowser = require('gulp-jasmine-browser');

gulp.task('default', function() {

// First: We need to transpile Sass into CSS
    gulp.src('sass/**/*.scss')
        .pipe(sass()).on('error', sass.logError)
// Second: We need a tool that adds vendor prefixes, like Auto-prefixer
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./css'));

});


// Third: Let's try Puppeteer: https://www.npmjs.com/package/puppeteer
// Guess, we need Puppeteer to get `gulp-jasmine-browser` to work

// Fourth: Let's get some testing going with a headless browser using gulp


// How to run the Tests in the terminal
gulp.task('tests', function() {

    return gulp.src('tests/spec/extraSpec.js')
    .pipe(jasmineBrowser.specRunner({console: true}))
    .pipe(jasmineBrowser.headless({driver: 'chrome'}));
});




