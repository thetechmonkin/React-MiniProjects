import React from "react";
import "./NotesCard.css";
import { useNotes } from "../../Contexts/notes-context";
import { searchFilteredNotes } from "../../Utils";

function NotesCard({ note, isPinnedIconVisible = true }) {
  const {
    notes,
    setNotes,
    pinnedNotes,
    setPinnedNotes,
    archiveNotes,
    setArchiveNotes,
    deletedNotes,
    setDeletedNotes,
  } = useNotes();

  const isNotePinned = searchFilteredNotes(pinnedNotes, note);
  const isNoteArchived = searchFilteredNotes(archiveNotes, note);
  const isNoteDeleted = searchFilteredNotes(deletedNotes, note);

  const onPinnedClick = (id) => {
    if (!isNotePinned) {
      const clickedNote = notes.find((note) => note.id === id);
      setPinnedNotes([...pinnedNotes, clickedNote]);

      setNotes(() => notes.filter((item) => item.id !== id));
    } else {
      const clickedNote = pinnedNotes.find((note) => note.id === id);
      setNotes([...notes, clickedNote]);

      setPinnedNotes(() => pinnedNotes.filter((note) => note.id !== id));
    }
  };

  const onArchiveClick = (id) => {
    let clickedNote;

    if (!isNoteArchived) {
      if (isNotePinned) {
        clickedNote = pinnedNotes.find((note) => note.id === id);
        setArchiveNotes([...archiveNotes, clickedNote]);
        setPinnedNotes(() => pinnedNotes.filter((item) => item.id !== id));
      } 
      else if(isNoteDeleted){
        clickedNote = deletedNotes.find((note) => note.id === id);
        setArchiveNotes([...archiveNotes, clickedNote]);
        setDeletedNotes(() => deletedNotes.filter((item) => item.id !== id));
      }
      else {
        clickedNote = notes.find((note) => note.id === id);
        setArchiveNotes([...archiveNotes, clickedNote]);
        setNotes(() => notes.filter((item) => item.id !== id));
      }
    } else {
      if (isNotePinned) {
        clickedNote = pinnedNotes.find((note) => note.id === id);
      } else {
        clickedNote = notes.find((note) => note.id === id);
      }
      setNotes([...notes, clickedNote]);
      setArchiveNotes(() => archiveNotes.filter((item) => item.id !== id));
    }
  };

  const onDeleteClick = (id) => {
    let clickedNote;

    if (!isNoteDeleted) {
      if (isNotePinned) {
        clickedNote = pinnedNotes.find((note) => note.id === id);
        setDeletedNotes([...deletedNotes, clickedNote]);
        setPinnedNotes(() => pinnedNotes.filter((item) => item.id !== id));
      } else if (isNoteArchived) {
        clickedNote = archiveNotes.find((note) => note.id === id);
        setDeletedNotes([...deletedNotes, clickedNote]);
        setArchiveNotes(() => archiveNotes.filter((item) => item.id !== id));
      } else {
        clickedNote = notes.find((note) => note.id === id);
        setDeletedNotes([...deletedNotes, clickedNote]);
        setNotes(() => notes.filter((item) => item.id !== id));
      }
    } else {
      setDeletedNotes(deletedNotes.filter((item) => item.id !== id));
    }
  };
  return (
    <div>
      <div>
        <h2>{note.title}</h2>
        {isPinnedIconVisible ? (
          <button onClick={() => onPinnedClick(note.id)}>
            <span
              className={
                isNotePinned ? "material-icons" : "material-icons-outlined"
              }
            >
              push_pin
            </span>
          </button>
        ) : (
          <></>
        )}
      </div>
      <div>
        <p>{note.description}</p>
      </div>
      <div>
        <button onClick={() => onArchiveClick(note.id)}>
          <span
            className={
              isNoteArchived ? "material-icons" : "material-icons-outlined"
            }
          >
            archive
          </span>
        </button>
        <button onClick={() => onDeleteClick(note.id)}>
          <span
            className={
              isNoteDeleted ? "material-icons" : "material-icons-outlined"
            }
          >
            delete
          </span>
        </button>
        {/* <button onClick={() => onDeleteClick(note.id)}>
          <span
            className={
              isNoteDeleted ? "material-icons" : "material-icons-outlined"
            }
          >
            delete
          </span>
        </button> */}
      </div>
    </div>
  );
}

export default NotesCard;
