const mongoose = require("mongoose");

const NotesSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

const NotesModel = mongoose.model("notes", NotesSchema);

module.exports = { NotesModel };
