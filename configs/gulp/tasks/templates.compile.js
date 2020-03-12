const gulp = require('../gulp');
const filter = require('gulp-filter');
const swig = require('gulp-swig');
const inlineCss = require('gulp-inline-css');
const browserSync = require('browser-sync');
const data = require('gulp-data');
const path = require('path');

const task = function () {
    var getJsonData = function(file){
        try {
            const dataPathObject = path.parse(file.path);
            return require(path.resolve(config.paths.absolute.sourceData, dataPathObject.name + '.json'));
        } catch (error) {
            console.log(error);
            return {};
        }
    };
    var swigOptions = {
        defaults : {
            cache : false
        }
    };
    return gulp
        .src(config.paths.relative.sourceTemplates + '/**/*.swig')
        .pipe(filter(['**', '!**/layouts/**', '!**/modules/**']))
        .pipe(data(getJsonData))
        .pipe(swig(swigOptions))
        .pipe(gulp.dest(config.paths.relative.buildTemplates))
        .pipe(inlineCss({
            applyStyleTags: false,
            applyLinkTags: true,
            removeStyleTags: false,
            removeLinkTags: true
        }))
        .pipe(gulp.dest(config.paths.relative.build))
        .on('end',browserSync.reload)
        ;
};
task.displayName = 'templates:compile';
task.description = 'Compile swig templates to HTML output with data from corresponding JSON file';
gulp.task(task);
