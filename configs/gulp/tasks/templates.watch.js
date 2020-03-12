const gulp = require('../gulp');

const task = function () {
    return gulp
        .watch(config.paths.relative.sourceTemplates + '/**', gulp.task('templates:compile'))
        ;
}

task.displayName = 'templates:watch';
task.description = 'Watch template changes & recompile HTML output';

gulp.task(task);
