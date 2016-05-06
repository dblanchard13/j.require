j.require
=========

A require statement that always begins from the root of your directory. The root is defined as where your node_modules folder is.

YourApp/
  *ROOT*
  node_modules/
  utils/
    coolUtil.js
  server/
    server.js
  package.json
  README.md

Example Usage:


  ```
    // server/server.js

    var j = require('j.require');
    var coolUtil = j.require('utils/coolUtil');

  ```
