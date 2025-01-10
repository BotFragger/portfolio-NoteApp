import { useState } from "react";

export default function AddNote({ addNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addNote(title, content);
    setTitle("");
    setContent("");
  }

  function handleTitleChange(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }

  function handleContentChange(e) {
    e.preventDefault();
    setContent(e.target.value);
  }
  return (
    <>
      <div className="flex justify-center my-4">
        <input
          value={title}
          onChange={handleTitleChange}
          type="text"
          placeholder="Title"
          className="flex bg-transparent border-2 rounded-xl w-1/4 p-3 font-bold"
        />
      </div>
      <div className="flex justify-center">
        <textarea
          value={content}
          onChange={handleContentChange}
          type="text area"
          placeholder="Content..."
          className="flex bg-transparent border-2 rounded-xl w-1/4 p-3 py-3 h-48"
        />
      </div>
      <div className="flex justify-center mt-3">
        <button
          type="submit"
          onClick={handleSubmit}
          className="flex bg-[#DC5F00] p-3 rounded-xl w-1/4 justify-center font-bold"
        >
          Add Note
        </button>
      </div>
    </>
  );
}
