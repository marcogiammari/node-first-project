const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");

app = express();

app.engine(
    "hbs",
    hbs.engine({
        extname: "hbs",
        defaultLayout: false,
        layoutsDir: "views/layouts/",
    })
);
app.set("view engine", "hbs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res) => {
    res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
