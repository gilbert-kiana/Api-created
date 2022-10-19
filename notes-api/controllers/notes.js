const Notes = require("./../models/Notes");

const getAllNotes = async (req, res) => {
  try {
    const notes = await Notes.find({});
    res.status(200).json({ notes });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createNote = async (req, res) => {
  try {
    const newNote = await Notes.create(req.body);
    res.status(201).json({ newNote });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleNote = async (req, res) => {
  try {
    const { id: NoteId } = req.params;
    const singleNote = await Notes.findone({ _id: NoteId });
    if (!singleNote) {
      return res.status(404).json({ msg: `No Note with id: ${NoteId}` });
    }

    res.status(200).json({ singleNote });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateNote = async (req, res) => {
  try {
    const { id: NoteId } = req.params;

    const singleNote = await Notes.findOneAndUpdate({ _id: NoteId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!singleNote) {
      return res.status(404).json({ msg: `No Note with id:${NoteId}` });
    }
  } catch (error) {}
};

const deleteNote = async (req, res) => {
  try {
    const { id: NoteId } = req.params;
    const singleNote = await Notes.findByIdAndDelete({ _id: NoteId });
    if (!singleNote) {
      return res.status(404).json({ msg: `No Note with id: ${NoteId}` });
    }
    res.status(200).json({ singleNote });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllNotes,
  createNote,
  getSingleNote,
  updateNote,
  deleteNote,
};
