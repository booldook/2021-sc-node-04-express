/* 
Semantic 
[GET]     /board                   - 전체게시글
[GET]     /board?page=1(page)      - 1P 게시글
[GET]     /board?type=create       - 글 신규 form
[GET]     /board/1(id)             - 글 상세
[GET]     /board/1?type=update     - 글 수정 form
[POST]    /board                   - 신규글 저장
[PUT]     /board                   - 수정글 저장
[DELETE]  /board/1                 - 글 삭제

-- 권장하지 않는 사항 --
/boards/lists
/board/create(x)
/board/update(x)
/board/delete(x)
*/

const express = require("express");
const createError = require("http-errors");
const mysql = require("mysql2");
const router = express.Router();

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "booldook",
  password: "000000",
  database: "booldook",
});

// list
router.get("/", async (req, res, next) => {
  try {
    const { page = 1, type } = req.query;
    if (type === "create") next();
    else {
      res.render("board/list");
    }
  } catch (err) {
    next(createError(err));
  }
});

// create
router.get("/", async (req, res, next) => {
  try {
    res.render("board/form.ejs");
  } catch (err) {
    next(createError(err));
  }
});

// save
router.post("/", async (req, res, next) => {
  try {
    const { title, writer, content } = req.body;
    connection.query(
      `INSERT INTO board SET 
        title='${title}', writer='${writer}', content='${content}'`,
      function (err, results, fields) {
        console.log(results);
      }
    );
    res.send("전송됨");
  } catch (err) {
    next(createError(err));
  }
});

// list
router.get("/", async (req, res, next) => {
  try {
    res.render("board/list");
  } catch (err) {
    next(createError(err));
  }
});

// list
router.get("/", async (req, res, next) => {
  try {
    res.render("board/list");
  } catch (err) {
    next(createError(err));
  }
});

// list
router.get("/", async (req, res, next) => {
  try {
    res.render("board/list");
  } catch (err) {
    next(createError(err));
  }
});

module.exports = router;
