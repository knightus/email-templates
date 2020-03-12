const gulp = require('../gulp');

const task = function () {
    return gulp
        .watch(config.paths.relative.sourceStyles + '/**',gulp.task('styles:compile'))
        ;
}

task.displayName = 'styles:watch';
task.description = 'Watch style changes & recompile LESS to CSS';

gulp.task(task);
