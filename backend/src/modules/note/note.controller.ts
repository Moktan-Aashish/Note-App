import { Request, Response } from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "./note.service";

export const getNotesController = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;

    const notes = await getAllNotes(userId);

    res.status(200).json({
      message: "Notes retrieved successfully",
      notes: notes,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getNoteByIdController = async (req: Request, res: Response) => {
  try {
    const noteId = req.params.id as string;

    const userId = (req as any).user.userId;

    const note = await getNoteById(userId, noteId);

    res.status(200).json({
      message: "Note retrieved successfully",
      note: note,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const addNoteController = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;

    const newNote = await createNote(req.body, userId);

    res.status(201).json({
      message: "Note created successfully",
      note: newNote,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateNoteController = async (req: Request, res: Response) => {
  try {
    const noteId = req.params.id as string;

    const userId = (req as any).user.userId;

    const updatedNote = await updateNote(noteId, req.body, userId);

    res.status(200).json({
      message: "Note updated successfully",
      note: updatedNote,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const removeNoteController = async (req: Request, res: Response) => {
  try {
    const noteId = req.params.id as string;

    const userId = (req as any).user.userId;

    const deletedNote = await deleteNote(noteId, userId);

    res.status(200).json({
      message: "Note deleted successfully",
      note: deletedNote,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
