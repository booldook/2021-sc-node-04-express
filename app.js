/******** Global require *******/
const path = require("path");
const express = require("express");
const logger = require("./middlewares/logger-mw");
const app = express();

/********* Server Init *********/
require("./modules/server-init")(app, 3000);

/******* Middleware Init *******/
app.use(logger);

/********* Views Init **********/
app.set("view engine", "ejs");
app.set("views", "./views");
app.locals.pretty = true;
app.locals.headTitle = "Express Twitter";

/********* Router Init *********/
const boardRouter = require("./routes/board-router");

app.use("/", express.static("./public"));
app.use("/board", boardRouter);

/********** Error Init *********/
const notFoundRouter = require("./routes/404-router");
const errorRouter = require("./routes/500-router");
app.use(notFoundRouter);
app.use(errorRouter);
