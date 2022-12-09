const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = process.env.MONGO_URL;

const client = new MongoClient(uri);
let databaseName = "Mongo_test_server";
let db;

async function run() {
  try {
    await client.connect();
    console.log("database connected");
    db = client.db(databaseName);
  } catch (error) {
    console.log(error);
  }
}
function getDatabase() {
  return db;
}

module.exports = {
  getDatabase,
  run,
};
