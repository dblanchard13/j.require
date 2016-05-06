module.exports = (function(){

  'use strict';

  var path = require('path');
  var join = path.join;
  var rootDir = path.resolve(join(__dirname, '../../'));

  return {
    require: (fileName, append) => require(join(rootDir, fileName))
  };
    
}());
