const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const { pool } = require("../modules/mysql-init");
const joinValidator = require("../middlewares/joinValidator");

// 로그인 창 보여주기
router.get("/login", (req, res, next) => {
  res.send("<h1>LOGIN FROM</h1>");
});

// 로그인 처리
router.get("/login", (req, res, next) => {
  res.send("<h1>로그인 처리</h1>");
});

// 로그아웃 처리
router.get("/logout", (req, res, next) => {
  res.send("<h1>로그인 처리</h1>");
});

// 회원가입창 보여주기
router.get("/join", (req, res, next) => {
  res.render("auth/join");
});

// 회원가입 처리
router.post("/join", joinValidator, async (req, res, next) => {
  try {
    let { userid, userpw, username, email } = req.body;
    let { BCRYPT_SALT: salt, BCRYPT_ROUND: round } = process.env;
    let password = await bcrypt.hash(userpw + salt, Number(round));
    let sql = "INSERT INTO user SET userid=?, userpw=?, username=?, email=?";
    let values = [userid, password, username, email];
    let rs = await pool.execute(sql, values);
    res.json(rs);
  } catch (err) {
    next(createError(err));
  }
});

// 회원수정창 보여주기
router.get("/join/:id", (req, res, next) => {
  res.send("<h1>JOIN FROM</h1>");
});

// 회원수정 처리
router.put("/join", (req, res, next) => {
  res.send("수정");
});

module.exports = router;
