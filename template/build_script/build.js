var gulp = require('gulp');
require('../gulpfile');

if(gulp.tasks.build)
    gulp.start('build');