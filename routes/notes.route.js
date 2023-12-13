const express = require("express");
require("dotenv").config();
const { NotesModel } = require("../models/notes.module.js");

const NotesRouter = express.Router();

NotesRouter.get("/", async (req, res) => {
  try {
    const ques = await NotesModel.find();
    res.status(200).send({ message: "add chat", ques });
    console.log("res", ques);
  } catch (err) {
    res.status(401).send({
      message: "Error in your API request",
      error: err,
    });
  }
});

NotesRouter.post("/add", async (req, res) => {
  try {
    const ques = new NotesModel(req.body);
    await ques.save();
    res.status(200).send({ message: "ques Successfully added", ques });
  } catch (err) {
    res.status(401).send({
      message: "Error in adding",
      error: err,
    });
  }
});
module.exports = { NotesRouter };