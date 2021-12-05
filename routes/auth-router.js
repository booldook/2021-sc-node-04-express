const express = require("express");
const router = express.Router();
const createError = require("http-errors");
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
    res.send("저장");
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
