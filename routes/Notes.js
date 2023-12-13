import express from "express";
import {
  createNotesController,
  deleteNotesController,
  getNotesController,
} from "../controllers/ArticlesController.js";

const router = express.Router();

// get notes
router.get("/get-notes", getNotesController);

// create notes
router.post("/create-notes", createNotesController);

// delete notes
router.delete("/delete-notes/:id", deleteNotesController);

export default router;
