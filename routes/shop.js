const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    // path.join individua il tuo os e capisce se joinare il path con \ (windows) o / (linux)
    res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
