const path = require("path");

const express = require("express");

const products = require("./admin");

const rootDir = path.dirname(require.main.filename);

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
    const products = adminData.products;
    res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
});

module.exports = router;
