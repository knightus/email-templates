const appRootDir = require('app-root-dir').get();
const { resolve } = require('path');

const config = require(resolve(appRootDir, 'package.json')).customConfigs;

config.paths.absolute = {};

//generate absolute paths from relative ones
for(key in config.paths.relative){
    config.paths.absolute[key] = __dirname + '/../../' + config.paths.relative[key];
}

//prepend path to browserSync files filter
for(key in config.server.browserSync.files){
    config.server.browserSync.files[key] = config.paths.relative.build + '/' + config.server.browserSync.files[key];
}

/**
 * Browserify
 */
for(key in config.scripts.browserify.bundleConfigs){
    config.scripts.browserify.bundleConfigs[key].entries = config.paths.relative.sourceScripts + '/' + config.scripts.browserify.bundleConfigs[key].entries;
}

module.exports = config;
