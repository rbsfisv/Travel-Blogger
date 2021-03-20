if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const path = require("path");
require("./db/mongoose");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routers/index");

const app = express();
const port = process.env.PORT || 3000;
const staticAssets = path.join(__dirname, "../public");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static(staticAssets));

app.use(express.json());
app.use(indexRouter);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
