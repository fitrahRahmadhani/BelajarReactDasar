import React from "react";
import NoteItem from "./NoteItem";

function NoteItemList({ notes, onDelete, onArchive, filteredNotes, active }) {
  const displayNotes = filteredNotes && filteredNotes.length > 0 ? filteredNotes : notes;
  const filteredDisplayNotes = active ? displayNotes.filter((note) => !note.archived) : displayNotes.filter((note) => note.archived);

  if (filteredDisplayNotes && filteredDisplayNotes.length > 0) {
    return (
      <div className="notes-list">
        {filteredDisplayNotes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="notes-list">
        <p>{active ? "Tidak ada catatan aktif" : "Tidak ada arsip"}</p>
      </div>
    );
  }
}

export default NoteItemList;
