const path = require("path");

const rootDir = path.dirname(require.main.filename);

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    // path.join individua il tuo os e capisce se joinare il path con \ (windows) o / (linux)
    res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
