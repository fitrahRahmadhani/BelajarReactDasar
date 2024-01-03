import React from "react";
import { getInitialData } from "../utils/index";
import NoteItemList from "./NoteItemList";
import NoteInput from "./NoteInput";
import SearchNote from "./SearchNote";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchTerm: "",
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      const updatedNotes = [...prevState.notes];
      const noteToUpdate = updatedNotes.find((note) => note.id === id);
      if (noteToUpdate) {
        noteToUpdate.archived = true;
      }

      return { notes: updatedNotes };
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: Math.max(...prevState.notes.map((note) => note.id), 0) + 1,
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onSearchChangeHandler(searchTerm) {
    this.setState({
      searchTerm: searchTerm,
    });
  }

  render() {
    const activeNotes = this.state.notes.filter((note) => !note.archived);
    const archivedNotes = this.state.notes.filter((note) => note.archived);
    const filteredNotes = this.state.searchTerm
      ? this.state.notes.filter((note) =>
          note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        )
      : this.state.notes;

    return (
      <React.Fragment>
        <div className="note-app__header">
          <h1>Notes</h1>
          <SearchNote
            searchTerm={this.state.searchTerm}
            onSearchChange={this.onSearchChangeHandler}
          />
        </div>
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          <NoteItemList
            notes={activeNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            filteredNotes={filteredNotes}
            active={true} 
          />

          <h2>Arsip</h2>
          <NoteItemList
            notes={archivedNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            filteredNotes={filteredNotes}
            active={false}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default NoteApp;
