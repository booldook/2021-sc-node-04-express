const express = require("express");
const router = express.Router();
const commentURL = "https://jsonplaceholder.typicode.com/comments";

router.get("/", async (req, res, next) => {
  try {
    res.json(lists);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
