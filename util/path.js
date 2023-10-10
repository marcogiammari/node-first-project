const path = require("path");

// exports the directory name of the main script file in a Node.js application
module.exports = path.dirname(require.main.filename);
