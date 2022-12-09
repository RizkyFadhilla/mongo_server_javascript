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
}
module.exports = userController;
