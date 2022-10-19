// const mongoose = require("mongoose");

// const NotesSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "Must provide name"],
//     trim: true,
//     maxLength: [20, "name can not be more than 20 characters"],
//   },
//   text: {
//     required: [true, "Must provide notes"],
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
// });

// module.exports = mongoose.model("Notes", NotesSchema);

const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Why no name?"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  title: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Notes", NotesSchema);
