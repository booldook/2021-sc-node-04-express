const createError = require("http-errors");
const validator = require("validator");

module.exports = (req, res, next) => {
  let { userid, userpw, userpw2, username, email } = req.body;
  let options = { min: 6, max: 24 };
  let validUserid = validator.isLength(userid.trim(), options);
  let validUserpw = validator.isLength(userpw.trim(), options);
  let validUserpw2 = validator.isLength(userpw2.trim(), options);
  let validPassword = userpw.trim() === userpw2.trim();
  let validUsername = validator.isLength(username.trim(), { min: 2, max: 255 });
  let validEmail = validator.isEmail(email.trim());
  if (
    validUserid &&
    validUserpw &&
    validUserpw2 &&
    validPassword &&
    validUsername &&
    validEmail
  ) {
    next();
  } else {
    next(createError(400));
  }
};
