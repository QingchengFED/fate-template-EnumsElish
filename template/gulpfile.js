var config = require('./config');
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var $ = gulpLoadPlugins(); //一次性载入所有的plugins


var allTasks = {};

allTasks.buildCss = function (src, dest){
    if(!src || !dest)
        throw new Error('can not find src or dest for task BuildCss')

    return gulp.src(src)
        .pipe($.less())
        .pipe(gulp.dest(dest));
}


gulp.task('buildCss', function(){
    return allTasks.buildCss()
})