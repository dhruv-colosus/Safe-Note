const express = require("express");
const {
  registerUser,
  authUser,
  updateUser,
} = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/updateprofile").post(protect, updateUser);

module.exports = router;
