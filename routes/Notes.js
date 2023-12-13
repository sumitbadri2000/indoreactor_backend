import express from "express";
import {
  createNotesController,
  deleteNotesController,
  getNotesController,
} from "../controllers/NotesController.js";

const router = express.Router();

router.get("/get-notes", getNotesController);

router.post("/create-notes", createNotesController);

router.delete("/delete-notes/:nid", deleteNotesController);

export default router;
