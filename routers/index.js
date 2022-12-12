const express = require("express");
const userController = require("../controllers/userController");
const Authentication = require("../middlewares/authentication");
const router = express.Router();
const userRouter = require("./user");
const animeRouter = require("./anime");
router.post("/login", userController.loginUser);
router.post("register", userController.registerOneUser);
router.use(Authentication);
router.use("/user", userRouter);
router.use("/anime", animeRouter);

module.exports = router;
