var gulp = require('gulp');
require('../gulpfile');

if(gulp.tasks.prePublish)
    gulp.start('prePublish');