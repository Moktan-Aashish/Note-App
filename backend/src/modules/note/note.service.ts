import { Note } from "./note.model";
import { noteData } from "./note.types";

export const getAllNotes = async (userId: string) => {
  const notes = await Note.find({ user: userId })
    .select("-__v")
    .sort({ createdAt: -1 });

  return notes;
};

export const getNoteById = async (userId: string, noteId: string) => {
  const note = await Note.findOne({ _id: noteId, user: userId }).select("-__v");

  if (!note) {
    throw new Error("Note not found");
  }

  return note;
};

export const createNote = async (data: noteData, userId: string) => {
  const { title, content } = data;

  const newNote = await Note.create({ title, content, user: userId });

  return newNote;
};

export const updateNote = async (
  noteId: string,
  data: noteData,
  userId: string,
) => {
  const { title, content } = data;

  const updatedNote = await Note.findOneAndUpdate(
    { _id: noteId, user: userId },
    { title, content },
    { new: true },
  ).select("-__v");

  if (!updatedNote) {
    throw new Error("Note not found");
  }

  return updatedNote;
};

export const deleteNote = async (noteId: string, userId: string) => {
  const note = await Note.findOneAndDelete({
    _id: noteId,
    user: userId,
  }).select("-__v");

  if (!note) {
    throw new Error("Note not found");
  }

  return note;
};
