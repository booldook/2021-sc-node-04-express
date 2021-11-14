const express = require("express");
const router = express.Router();

router.use((err, req, res, next) => {
  res.send(err);
});

module.exports = router;
