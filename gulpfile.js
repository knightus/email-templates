const requireDir = require('require-dir');
const gulp = require('./configs/gulp/gulp.js');

/**
 * ===== Data Configuration =====
 */
config = require('./configs/gulp/config.js');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./configs/gulp/tasks', { recurse: true });

gulp.task('build', gulp.parallel(
    'templates:compile',
    'styles:compile',
));

gulp.task('watch', gulp.parallel(
    'templates:watch',
    'styles:watch',
    'assets:images:watch',
));

gulp.task('default', gulp.parallel(
    'build',
    'server:start',
    'watch',
    'assets:images',
));
