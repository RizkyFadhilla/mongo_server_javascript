const { getDatabase } = require("../confiq/mongo-connection");

class animeDatabase {
  static invokeDatabase() {
    let db = getDatabase();
    return db.collection("anime");
  }
  static getAllAnime() {
    return this.invokeDatabase().find().toArray();
  }
  static getOneAnime(id) {
    return this.invokeDatabase().findOne({ _id: ObjectId(id) });
  }
  static addAnime(input) {
    return this.invokeDatabase().insertOne(input);
  }
  static updateAnime(input) {
    return this.invokeDatabase().updateOne(input);
  }
  static deleteAnime(id) {
    return this.invokeDatabase().deleteOne({ _id: ObjectId(id) });
  }
}
module.exports = animeDatabase;
