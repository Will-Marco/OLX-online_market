require("dotenv").config;

const express = require("express");

const PORT = process.env.PORT || 8080;
app.listen(PORT);

const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const databaseMiddleware = require("./src/middlewares/databaseMiddleware");

async function server() {
  try {
    const app = express();
    // middlewares
    app.use(express.json);
    app.use(express.urlencoded());
    app.use(morgan("dev"));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, "src", "public")));
    app.use(databaseMiddleware());
    // settings
    app.set("view engine", "ejs");
  } finally {
  }
}
