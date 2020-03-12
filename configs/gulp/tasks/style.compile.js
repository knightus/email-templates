const gulp = require('../gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync');

const task = function () {
    return gulp.src(config.paths.relative.sourceStyles + '/style.less')
        .pipe(less())
        .pipe(gulp.dest(config.paths.relative.buildStyles))
        .pipe(browserSync.stream())
        ;
};

task.displayName = 'styles:compile';
task.description = 'Compile LESS to CSS';

gulp.task(task);
