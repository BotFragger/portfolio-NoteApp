import { noteStore } from "../states/NoteStore";
import NoteItem from "./NoteItem";
import { useShallow } from "zustand/react/shallow";

export default function NoteList() {
  const { notes, deleteNote, toggleDone} = noteStore(
    useShallow((state) => ({
      notes: state.notes,
      deleteNote: state.deleteNote,
      toggleDone: state.toggleDone,
    }))
  );
  console.log("NoteList notes: ", notes);

  const handleDelete = (id) => {
    deleteNote(id);
  };

  const handleToggleDone = (id) => {
    toggleDone(id);
  };

  const filteredDone = notes.filter((note) => note.done === true)

  if (!notes.length) return <p>No Notes are available</p>;
  return (
    <>
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
          />
        ))}
      </div>
    </>
  );
}
