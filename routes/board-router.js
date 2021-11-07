/* 
Semantic 
[GET]     /book                   - 전체게시글
[GET]     /book?page=1(page)      - 1P 게시글
[GET]     /book?type=create       - 글 신규 form
[GET]     /book/1(id)             - 글 상세
[GET]     /book/1?type=update     - 글 수정 form
[POST]    /book                   - 신규글 저장
[PUT]     /book                   - 수정글 저장
[DELETE]  /book/1                 - 글 삭제

-- 권장하지 않는 사항 --
/books/lists
/book/create(x)
/book/update(x)
/book/delete(x)
*/

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>ALL POST</h1>");
});

router.get("/:id", (req, res) => {
  res.send("<h1>" + req.params.id + " POST</h1>");
});

module.exports = router;
