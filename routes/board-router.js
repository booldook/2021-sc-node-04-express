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
const router = express.Router();

router.get("/", (req, res) => {
  res.render("board/list");
});

router.get("/:id", (req, res) => {
  res.send("<h1>" + req.params.id + " POST</h1>");
});

module.exports = router;
