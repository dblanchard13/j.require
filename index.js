var path = require('path');
var join = path.join;
var rootDir = path.resolve(join(__dirname, '../../'));
var packageJsonNode = 'brDirs';
var FileName = 'br'; 
var rootConfig;
/**
 * Try to read config from br.js or br.json and then look under
 * the package.json to see if it is in the brDirs node
 */
function initConfig() {
    try {
        rootConfig = require(join(rootDir, FileName));
    } catch (e) {
        try {
            rootConfig = require(join(rootDir, 'package.json'))[packageJsonNode];
        } catch (e2) {}
    }
}

initConfig();


function getFileName(fileNameOrKey, append) {
    var configValue = rootConfig && rootConfig[fileNameOrKey];

    return configValue ? join(configValue, append || '') : fileNameOrKey;
}

module.exports.require = function(fileName, append) {
    return require(join(rootDir, getFileName(fileName, append)));
};
