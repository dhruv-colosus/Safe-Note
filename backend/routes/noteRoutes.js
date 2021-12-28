const express = require("express");
const {
  getNotes,
  createNote,
  getNoteById,
  updateNotebyID,
  deleteNotebyID,
} = require("../controllers/noteControllers");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getNotes);
router
  .route("/:id")
  .get(getNoteById)
  .put(protect, updateNotebyID)
  .delete(protect, deleteNotebyID);
router.route("/create").post(protect, createNote);
module.exports = router;
