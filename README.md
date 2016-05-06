j.require
=========

A require statement that always begins from the root of your directory.<br>
The root is defined as where your node_modules folder is.

****

YourApp/<br>
--**ROOT**<br>
--node_modules/<br>
--utils/<br>
----**NOT ROOT**<br>
----coolUtil.js<br>
--server/<br>
----server.js<br>
--index.js<br>
--package.json<br>
--README.md<br>

****

Example Usage:


  ```
    // server/server.js

    var j = require('j.require');
    var coolUtil = j.require('utils/coolUtil');

  ```
