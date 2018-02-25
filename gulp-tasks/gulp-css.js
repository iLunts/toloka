/// <binding AfterBuild='scripts' />
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

// ---------------------------------------
// ---------------------------------------
// Less
// ---------------------------------------
// ---------------------------------------

gulp.task('css.site', function () {
    gulp.src(['web-src/less/site.less'])
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(concat('site.min.css'))
        .pipe(clean({
            force: true
        }))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('content/css/'));
});
