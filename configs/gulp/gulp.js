const gulp = require('gulp');
const plumber = require('gulp-plumber');
const gutil = require('gulp-util');

const gulp_src = gulp.src;

gulp.src = function() {
    return gulp_src.apply(gulp, arguments)
        .pipe(plumber(function(error) {
                // Output an error message
                gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
                // emit the end event, to properly end the task
                this.emit('end');
            })
        );
};

module.exports = gulp;
