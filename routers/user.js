const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/", userController.getAllUserRegister);
router.get("/:id", userController.getOneUserRegister);


module.exports = router;
