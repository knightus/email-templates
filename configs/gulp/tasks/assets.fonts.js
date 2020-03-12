const gulp = require('../gulp');

const task = function () {
    return gulp
        .src(config.paths.relative.sourceFonts + '/*')
        .pipe(fontgen({
            dest: config.paths.relative.buildFonts
        }))
        ;
};

task.displayName = 'assets:fonts';
task.description = 'Copy fonts to build directory';

gulp.task(task);
