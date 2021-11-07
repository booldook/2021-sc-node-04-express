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
    const page = Number(req.query.page || 1);
    const listURL = "https://jsonplaceholder.typicode.com/posts";
    const userURL = "https://jsonplaceholder.typicode.com/users";
    const { data } = await axios.get(listURL);
    const datas = data;
    datas.forEach(async (v, i) => {
      const { data } = await axios.get(userURL + "/" + v.userId);
      v.username = data.name;
    });
    const startIdx = (page - 1) * 10;
    const lists = datas.filter(
      (list, idx) => startIdx <= idx && startIdx + 10 > idx
    );
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
