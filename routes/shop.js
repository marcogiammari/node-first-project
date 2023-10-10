const path = require("path");

const express = require("express");

const rootDir = path.dirname(require.main.filename);

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("shop");
});

module.exports = router;
