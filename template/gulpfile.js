var config = require('./config');
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var $ = gulpLoadPlugins(); //一次性载入所有的plugins
var allTasks = require('./utils/tasks');
var path = require('path');


gulp.task('lessBuild', function () {
    return gulp.src(config.base.lessSrc)
          .pipe($.less())
          // .pipe($.replace(/'\.\.\/img\/([\w\/_\-\.]+)'/g, "'/static/[project_name]/img/$1'"))
          .pipe(gulp.dest(path.resolve(config.base.dist, 'css')))
          .pipe($.notify('less build'));
});

gulp.task('htmlBuild', function () {
    return gulp.src(config.base.backendTplSrc)
          .pipe($.useref())
          // .pipe($.if('*.js', $.uglify()))
          .pipe(gulp.dest(path.resolve(config.base.dist, 'backend_templates')))
          .pipe($.notify('html build'));
});

gulp.task('templatesBuild', function () {
    return gulp.src(config.base.frontendTplSrc)
          .pipe($.angularTemplatecache({standalone:true}))
          .pipe(gulp.dest(path.resolve(config.base.dist, 'js')))
          .pipe($.notify('templates build'));
});

gulp.task('imagesMove', function () {
    return allTasks.moveFiles(config.base.imgSrc, path.resolve(config.base.dist, 'img'));
});

gulp.task('cssMove', function () {
    return allTasks.moveFiles(config.base.cssSrc, path.resolve(config.base.dist, 'css'));
});

gulp.task('clean', function () {
    return allTasks.clearDir(path.resolve(config.base.dist, 'backend_templates'));
})

gulp.task('localBuild', ['lessBuild', 'htmlBuild', 'templatesBuild', 'imagesMove', 'cssMove'], function () {
    console.log('local build done');
})


gulp.task('localBuild&&Clean', ['localBuild'], function () {
    return allTasks.clearDir(path.resolve(config.base.dist, 'backend_templates'));
})

//write task build
gulp.task('build', ['localBuild&&Clean'], function(){
    return allTasks.moveFiles(path.resolve(config.base.dist, '**/**/**'), config.build.dist);
});

//write task prePublish
gulp.task('prePublish', ['localBuild&&Clean'], function(){
    console.log('pre publish done')
});

gulp.task('watchAll', function () {
  $.watch(path.resolve(config.base.src, '**/**/**'), $.batch(function (events, done) {
        gulp.start('build', done);
    }));
})
