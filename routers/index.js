const express = require("express");
const userController = require("../controllers/userController");
const Authentication = require("../middlewares/authentication");
const router = express.Router();
const userRouter = require("./user");
router.post("/login", userController.loginUser);
router.post("/register", userController.registerOneUser);
router.get("/", (req,res)=>{
    res.send("welcome")
})
router.use(Authentication);
router.use("/user", userRouter);

module.exports = router;
