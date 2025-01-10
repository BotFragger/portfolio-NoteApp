import AddNote from "../components/AddNote";
import { noteStore } from "../states/NoteStore";

export default function NewNote() {
  const addNote = noteStore((state) => state.addNote);
  function addNewNote(title, content) {
    addNote(title, content);
  }
  return (
    <>
      <div className="m-6">
        <h1 className="text-white font-bold text-center text-3xl">
          Add New Note
        </h1>
      </div>
      <AddNote addNote={addNewNote} />
    </>
  );
}
