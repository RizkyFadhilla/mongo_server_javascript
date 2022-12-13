const { ObjectId } = require("mongodb");
const { getDatabase } = require("../confiq/mongo-connection");

class userDatabase {
  static invokeDatabase() {
    let db = getDatabase();
    return db.collection("users");
  }
  static getAllUser() {
    return this.invokeDatabase().find().toArray();
  }
  static getOneUser(id) {
    return this.invokeDatabase().findOne({ _id: ObjectId(id) });
  }
  static registerUser(input) {
    return this.invokeDatabase().insertOne(input);
  }
  static updateUser(id,input) {
    return this.invokeDatabase().updateOne({ _id: ObjectId(id) }, input);
  }
  static deleteUser(id) {
    return this.invokeDatabase().deleteOne({ _id: ObjectId(id) });
  }
  static checkUser(username) {
    return this.invokeDatabase().findOne({ username: username });
  }
}
module.exports = userDatabase;
