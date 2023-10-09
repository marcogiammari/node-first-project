const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("<h1>The middleware that handles just / </h1>");
});

module.exports = router;
