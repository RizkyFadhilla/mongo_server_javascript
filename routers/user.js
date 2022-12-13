const express = require("express");
const userController = require("../controllers/userController");
const Authorization = require("../middlewares/authorization");
const router = express.Router();

router.get("/", userController.getAllUserRegister);
router.put("/:id", Authorization, userController.updateUserData);
router.delete("/:id", Authorization, userController.deleteOneUser);

module.exports = router;
