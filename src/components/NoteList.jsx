import { useState } from "react";
import { noteStore } from "../states/NoteStore";
import NoteItem from "./NoteItem";
import { useShallow } from "zustand/react/shallow";

export default function NoteList() {
  const { notes, deleteNote, toggleDone } = noteStore(
    useShallow((state) => ({
      notes: state.notes,
      deleteNote: state.deleteNote,
      toggleDone: state.toggleDone,
    }))
  );
  console.log("NoteList notes: ", notes);

  const [showCompleted, setShowCompleted] = useState(false);

  const handleDelete = (id) => {
    deleteNote(id);
  };

  const handleToggleDone = (id) => {
    toggleDone(id);
  };

  const handleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const filteredDone = notes.filter((note) => note.done === showCompleted);

  // if (!filteredDone.length) return <p>No Notes are available</p>;
  return (
    <>
      <button
        onClick={handleShowCompleted}
        className="flex bg-[#DC5F00] p-3 rounded-xl w-1/4 justify-center font-bold"
      >
        {showCompleted ? "Show uncompleted Notes" : "Show Completed Notes"}
      </button>
      <div className="justify-center">
        {!showCompleted ? (
          <p className="text-white font-bold text-center text-xl">
            this is uncompleted notes
          </p>
        ) : (
          <p className="text-white font-bold text-center text-xl">
            this is completed notes
          </p>
        )}
      </div>
      {filteredDone.length === 0 ? (
        <p className="text-white font-bold text-center text-3xl">
          No Notes are available
        </p>
      ) : (
        <div className="justify-center grid grid-cols-4 gap-4 p-8">
          {filteredDone.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              title={note.title}
              createdAt={note.createdAt}
              content={note.content}
              onDelete={handleDelete}
              onDone={handleToggleDone}
              done={note.done}
            />
          ))}
        </div>
      )}
    </>
  );
}
