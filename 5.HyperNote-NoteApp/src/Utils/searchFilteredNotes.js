export const searchFilteredNotes = (pinnedNotes, note) =>
  pinnedNotes.some((pinnedNote) => pinnedNote.id == note.id);
