const gulp = require('../gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

const task = function () {
    return gulp
        .src(config.paths.relative.sourceImages + '/**/*')
        // .pipe(imagemin({
        //     progressive: true,
        //     interlaced: true,
        //     svgoPlugins: [{ removeViewBox: false }],
        //     use: [pngquant()]
        // }))
        .pipe(gulp.dest(config.paths.relative.buildImages))
        ;
};

task.displayName = 'assets:images';
task.description = 'Copy & optimize source images to build directory';

gulp.task(task);
