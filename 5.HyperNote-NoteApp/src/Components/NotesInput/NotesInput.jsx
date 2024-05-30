import React, { useState } from "react";
import { useNotes } from "../../Contexts/notes-context";
import { v4 as uuid } from "uuid";
import "./NotesInput.css";

function NotesInput() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { notes, setNotes } = useNotes();

  const onAddClick = (e) => {
    e.preventDefault();

    setNotes([
      ...notes,
      { id: uuid(), title: title, description: description },
    ]);
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <div className="notes-input-container">
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your note here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button className="notes-input-button" disabled={title.length === 0} onClick={onAddClick}>
        <span className="material-icons-outlined">add_circle</span>
      </button>
    </>
  );
}

export default NotesInput;
