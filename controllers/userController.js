const { hashPassword, comparePassword } = require("../helpers/bcrypt");
const { signPayload } = require("../helpers/jwt");
const userDatabase = require("../models/user");

class userController {
  static async getAllUserRegister(req, res) {
    try {
      let user = await userDatabase.getAllUser();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json("Internal Service Error");
    }
  }
  static async getOneUserRegister(req, res) {
    try {
      let id = req.params.id;
      let user = await userDatabase.getOneUser(id);
      if (!user) {
        res.status(404).json("Data Not Found");
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json("Internal Service Error");
    }
  }
  static async registerOneUser(req, res) {
    try {
      let { username, password, role } = req.body;
      if (!username || !password || !role) {
        res.status(400).json("Please fill the Username Password or Role");
        return;
      }
      let checkUserStatus = await userDatabase.checkUser(username);
      if (checkUserStatus) {
        res.status(400).json("Username already been used");
        return;
      }
      await userDatabase.registerUser({
        username: username,
        password: hashPassword(password),
        role: role,
      });
      res.status(201).json("Register Success");
    } catch (error) {
      res.status(500).json("Internal Service Error");
    }
  }
  static async loginUser(req, res) {
    try {
      let { username, password } = req.body;
      if (!username || !password) {
        res.status(400).json("Please fill the Username or Password");
        return;
      }
      let checkUserLogin = await userDatabase.checkUser(username);
      if (!checkUserLogin) {
        res.status(403).json("Username or Password Not Found");
        return;
      }
      const comparePass = comparePassword(password, checkUserLogin.password);
      if (!comparePass) {
        res.status(403).json("Username or Password Not Found");
        return;
      }
      const payload = {
        id: checkUserLogin._id,
        username: checkUserLogin.username,
        role: checkUserLogin.role,
      };
      const access_token = signPayload(payload);
      res.status(200).json(access_token);
    } catch (error) {
      res.status(500).json("Internal Service Error");
    }
  }
}
module.exports = userController;
