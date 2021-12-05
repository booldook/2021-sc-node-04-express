/******** Global require *******/
require("./modules/dotenv-init")();
const express = require("express");
const logger = require("./middlewares/logger-mw");
const method = require("./middlewares/method-mw");
const app = express();

const session = require("express-session");

/********* Server Init *********/
require("./modules/server-init")(app, process.env.PORT);

/******* Middleware Init *******/
app.use(logger);

/********* Views Init **********/
app.set("view engine", "ejs");
app.set("views", "./views");
app.locals.pretty = true;
app.locals.headTitle = "Express Twitter";

/***** req.body Middleware *****/

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(method);

app.set("trust proxy", 1);
app.use(
  session({
    secret: process.env.SESSION_SALT,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.SESSION_SECURE == true, httpOnly: true },
  })
);

app.use((req, res, next) => {
  console.log(req.session);
  next();
});

/********* Static Init *********/
app.use("/", express.static("./public"));
app.use("/uploads", express.static("./storages"));

/********* Router Init *********/
const apiRouter = require("./routes/api-router");
const boardRouter = require("./routes/board-router");
const authRouter = require("./routes/auth-router");

app.use("/api", apiRouter);
app.use("/board", boardRouter);
app.use("/auth", authRouter);

/********** Error Init *********/
const notFoundRouter = require("./routes/404-router");
const errorRouter = require("./routes/500-router");
app.use(notFoundRouter);
app.use(errorRouter);
