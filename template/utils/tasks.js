var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var $ = gulpLoadPlugins();


var allTasks = {};

allTasks.buildLess = function (src, dest) {
    if (!src || !dest)
        throw new Error('can not find src or dest for task buildLess');
    
    return gulp.src(src)
        .pipe($.less())
        .pipe(gulp.dest(dest));
};

allTasks.clearDir = function (src) {
    if(!src)
        throw new Error('can not find dir src for task clearDir');

    return gulp.src(src, {read: false})
        .pipe($.clean({force: true}))
};

allTasks.moveFiles = function (src, dest) {
    if (!src || !dest)
        throw new Error('can not find src or dest for task moveFiles');

    return gulp.src(src)
        .pipe(gulp.dest(dest));
};

module.exports = allTasks;
