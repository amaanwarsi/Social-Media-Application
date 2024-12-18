// API routes creation and using controller func's 
const express = require("express");
const { register, login } = require("../controller/User");
const { followUser } = require("../controller/Post");
const {isAuthenticate} = require("../middlewares/auth")
const router = express.Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/follow/:id").get(isAuthenticate,followUser)
module.exports = router