const animeDatabase = require("../models/animeModel");
const { ObjectId } = require("mongodb");

class animeController {
  static async viewAllAnime(req, res) {
    try {
      let response = await animeDatabase.getAllAnime();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json("Internal Service Error");
    }
  }
  static async viewOneAnime(req, res) {
    try {
      let id = req.params.id;
      let response = await animeDatabase.getOneAnime(id);
      if (!response) {
        res.status(404).json("Data Not Found");
      }
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json("Internal Service Error");
    }
  }
  static async addAnimeToDatabase(req, res) {
    try {
      let userId = req.user.id;
      let { title, synopsis, trailerUrl, imgUrl } = req.body;
      if (!title || !synopsis || !trailerUrl || !imgUrl) {
        res.status(400).json("Please fill the empty spot");
      }
      await animeDatabase.addAnime({
        title: title,
        synopsis: synopsis,
        mongoDbId: userId,
        trailerUrl: trailerUrl,
        imgUrl: imgUrl,
      });
      res.status(201).json("Anime has been add");
    } catch (error) {
      res.status(500).json("Internal Service Error");
    }
  }
  static async updateAnimeData(req, res) {
    try {
      let id = req.params.id;
      let { title, synopsis, trailerUrl, imgUrl } = req.body;
      if (!title || !synopsis || !trailerUrl || !imgUrl) {
        res.status(400).json("Please fill the empty spot");
      }
      let checkData = await animeDatabase.getOneAnime(id);
      if (!checkData) {
        res.status(404).json("Data Not Found");
      }
      const updateData = {
        $set: {
          title,
          synopsis,
          mongoDbId: checkData.mongoDbId,
          trailerUrl,
          imgUrl,
        },
      };
      await userDb.updateData(id, updateData);
      res.status(200).json("update data success");
    } catch (error) {
      res.status(500).json("Internal Service Error");
    }
  }
  static async deleteOneAnime(req, res) {
    try {
      let id = req.params.id;
      let checkData = await animeDatabase.getOneAnime(id);
      if (!checkData) {
        res.status(404).json("Data Not Found");
      }
      await animeDatabase.deleteAnime(id);
      res.status(200).json("Anime has been deleted");
    } catch (error) {
      res.status(500).json("Internal Service Error");
    }
  }
}
module.exports = animeController;
