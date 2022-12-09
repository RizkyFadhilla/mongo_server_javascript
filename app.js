require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const router = require("./routers");
const { run } = require("./confiq/mongo-connection");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

run().then(() => {
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });
});
