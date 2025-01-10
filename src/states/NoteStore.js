import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const noteStore = create()(
  immer((set) => ({
    notes: [],
    addNote: (title, content) =>
      set((state) => {
        const newNote = {
          id: Date.now(),
          title,
          content,
          done: false,
          createdAt: new Date(),
        };
        console.log("adding new note", newNote);
        state.notes.push(newNote);
        // return {
        //   notes: [...state.notes, newNote],
        // };
      }),
    deleteNote: (id) =>
      set((state) => ({
        notes: state.notes.filter((note) => note.id !== id),
      })),
    // deleteNote: (id) =>
    //   set((state) => {
    //     console.log("Deleting note with id: ", id);
    //     return {
    //       notes: state.notes.filter((note) => note.id !== id),
    //     };
    //   }),

    toggleDone: (id) =>
      set((state) => ({
        notes: state.notes.map((note) => {
          if (note.id === id) {
            return { ...note, done: !note.done };
          }
          return note;
        }),
      })),
  }))
);
