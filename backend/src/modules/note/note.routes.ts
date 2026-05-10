import express from "express";
import {
  addNoteController,
  getNoteByIdController,
  getNotesController,
  removeNoteController,
  updateNoteController,
} from "./note.controller";

const noteRouter = express.Router();

noteRouter.get("/", getNotesController);
noteRouter.get("/:id", getNoteByIdController);
noteRouter.post("/", addNoteController);
noteRouter.patch("/:id", updateNoteController);
noteRouter.delete("/:id", removeNoteController);

export default noteRouter;
