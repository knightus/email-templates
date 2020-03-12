const gulp = require('../gulp');
const browserSync = require('browser-sync');
const exec = require('child_process').exec;

const task = function() {
    exec(__dirname + '/../../node_modules/.bin/vorlon');

    browserSync(config.server.browserSync);
};

task.displayName = 'server:start';
task.description = 'Start the browserSync server';

gulp.task(task);
