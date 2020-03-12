const gulp = require('../gulp');

const task = function () {
    return gulp
        .watch(config.paths.relative.sourceImages + '/**/*', gulp.task('assets:images'))
        ;
}

task.displayName = 'assets:images:watch';
task.description = 'Watch image changes & re-process the images';

gulp.task(task);
