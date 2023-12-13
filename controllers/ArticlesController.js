import dotenv from "dotenv";
import NotesModel from "../models/ArticlesModel.js";

dotenv.config();

// get all notes controller
export const getNotesController = async (req, res) => {
  try {
    const notes = await NotesModel.find({});
    res.status(200).send({
      success: true,
      total: notes.length,
      message: "All notes",
      notes,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting all notes",
      error,
    });
  }
};

// create notes controller
export const createNotesController = async (req, res) => {
  try {
    const notes = new NotesModel({ ...req.body });
    await notes.save();
    res.status(201).send({
      success: true,
      message: "Note created successfully",
      notes,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in creating note",
      error,
    });
  }
};

// delete notes controller
export const deleteNotesController = async (req, res) => {
  try {
    await NotesModel.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: "Note deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.statsu(500).send({
      success: false,
      message: "Error while deleting note",
      error,
    });
  }
};
