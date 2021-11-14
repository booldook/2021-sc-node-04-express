/******** Global require *******/
const express = require("express");
const createError = require("http-errors");
const app = express();

/********* Server Init *********/
require("./modules/server-init")(app, 3000);

/********* Views Init **********/
app.set("view engine", "ejs");
app.set("views", "./views");
app.locals.pretty = true;
app.locals.headTitle = "Express Twitter";

/******* MiddleWare Init *******/
app.use((req, res, next) => {
  req.user = {};
  req.user.name = "booldook";
  next();
});

/********* Router Init *********/
app.use("/", express.static("./public"));
app.get("/board", (req, res, next) => {
  try {
    res.sen(req.user.name + " HERE");
  } catch (err) {
    next(createError(401));
  }
});

/********** Error Init *********/
app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.send(err);
});
