/* 
[GET]  /post            -> 전체 게시글
[GET]  /post/1          -> 특정 게시글
[GET]  /post/1/comments -> 특정 게시글 코멘트
[POST] /post            -> 특정 게시글 저장
*/

const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const listURL = "https://jsonplaceholder.typicode.com/posts";
    const { data: lists } = await axios.get(listURL);
    res.render("post/list", { lists });
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", (req, res) => {
  res.send(req.params.id + "번 글");
});

router.get("/:id/comments", (req, res) => {
  res.send(req.params.id + "번 글의 코멘트들");
});

router.post("/", (req, res) => {
  res.send("포스트 저장");
});

module.exports = router;
