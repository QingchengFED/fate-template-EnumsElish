var config = require('./config');
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var $ = gulpLoadPlugins(); //一次性载入所有的plugins
var allTasks = require('./utils/tasks');



//write task build
gulp.task('build', function(){});

//write task prePublish
gulp.task('prePublish', function(){});