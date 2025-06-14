import express from "express";
import {
  createNote,
  DeleteNote,
  getAllNotes,
  getNoteById,
  UpdateNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/", createNote);

router.put("/:id", UpdateNote);

router.delete("/:id", DeleteNote);

export default router;
