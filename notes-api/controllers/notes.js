const getAllNotes = (req, res) => {
  res.send("get all notes");
};

const createNote = (req, res) => {
  res.send("create Note");
};

const getSingleNote = (req, res) => {
  res.send("This is a single Note");
};

const updateNote = (req, res) => {
  res.send("update Note");
};

const deleteNote = (req, res) => {
  res.send("delete Note");
};

module.exports = {
  getAllNotes,
  createNote,
  getSingleNote,
  updateNote,
  deleteNote,
};
