const express = require("express");
const animeController = require("../controllers/animeController");
const Authorization = require("../middlewares/authorization");
const router = express.Router();

router.get("/", animeController.viewAllAnime);
router.use(Authorization);
router.get("/:id", animeController.viewOneAnime);
router.post("/", animeController.addAnimeToDatabase);
router.post("/:id", animeController.updateAnimeData);
router.delete("/:id", animeController.deleteOneAnime);

module.exports = router;
