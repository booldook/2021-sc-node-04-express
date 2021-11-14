module.exports = (err, req, res, next) => {
  res.render("error/error", {
    status: err.code,
    message: err.message,
    description: null, // SQL에러
  });
};
