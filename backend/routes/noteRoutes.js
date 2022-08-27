const express = require("express");
const {
  getNotes,
  createNote,
  getNoteById,
  updateNotebyID,
  deleteNotebyID,
  updateShareNotebyID,
  shareNote,
} = require("../controllers/noteControllers");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getNotes);
router
  .route("/:id")
  .get(protect, getNoteById)
  .put(protect, updateNotebyID)
  .delete(protect, deleteNotebyID);
router.route("/create").post(protect, createNote);
router.route("/share/:id").get(shareNote).put(protect, updateShareNotebyID);
module.exports = router;
