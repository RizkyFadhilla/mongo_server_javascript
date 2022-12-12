const { verifyToken } = require("../helpers/jwt");
const userDatabase = require("../models/user");

async function Authentication(req, res, next) {
  try {
    let { access_token } = req.headers;
    if (!access_token) {
      res.status(403).json("Please Login");
    }
    let payload = verifyToken(access_token);
    let findUser = await userDatabase.checkUser(payload.username);
    if (!findUser) {
      res.status(403).json("Please Login");
    }
    req.user({
      id: findUser._id,
      username: findUser.username,
      role: findUser.role,
    });
    next();
  } catch (error) {
    res.status(403).json("Please Login");
  }
}
module.exports = Authentication;
