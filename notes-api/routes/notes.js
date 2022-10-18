const express = require("express");
const router = express.Router();

const {
  getAllNotes,
  createNote,
  getSingleNote,
  deleteNote,
  updateNote,
} = require("../controllers/notes");

router.route("/").get(getAllNotes).post(createNote);
router.route("/:id").get(getSingleNote).delete(deleteNote).patch(updateNote);

module.exports = router;
