/*
암호화(encrypt)
복호화(decrypt)
단방향: 암호화 되고 나서 풀 수 없다(복호화 없음)
양방향: 암호화 -> key -> 복호화

단방향: 사용자의 비밀번호 저장(SHA)
양방향: http(80) -> https(443)
*/

const crypto = require("crypto");
let pass = "1234";
let pass2 = "1234";
let salt = "&n@-+78Sg";
let encrypt = crypto
  .createHash("sha512")
  .update(pass + salt)
  .digest("base64");
let encrypt2 = crypto
  .createHash("sha512")
  .update(pass2 + salt)
  .digest("base64");
console.log(encrypt);
console.log(encrypt2);
