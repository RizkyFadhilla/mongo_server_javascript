const bcyrpt = require("bcryptjs");

let hashPassword = (password) => bcyrpt.hashSync(password);
let comparePassword = (password, hashPw) =>
  bcyrpt.compareSync(password, hashPw);

module.exports = {
  hashPassword,
  comparePassword,
};
