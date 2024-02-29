import React from "react";
import { getInitialData } from "../utils";
import NoteList from "./NotesList";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
        }
        this.onArchiveEventEventHandler = this.onArchiveEventEventHandler.bind(this);
        this.onDeleteEventEventHandler = this.onDeleteEventEventHandler.bind(this);
        this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    }
    onArchiveEventEventHandler(id){
        this.setState((prevState) => {
            const updateNote = [prevState.notes];
            const noteToUpdate = updateNote.find((note) => {note.id === id});
            if(noteToUpdate){
                noteToUpdate.archieved = true;
            }
        })
    }
    onDeleteEventEventHandler(id){
        const notes = this.state.notes.filter((note) => ( 
            note.id !== id
        ));
        this.setState({ notes })
    }
    onAddNoteEventHandler({ title, body}){
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: Math.max(...prevState.notes.map((note) => note.id), 0) + 1,
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archieved: false,
                    }
                ]
            }
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="note-app__header">
                    <h1>Notes</h1>
                </div>
                <div className="note-app__body">
                    <NoteInput addNote={this.onAddNoteEventHandler}/>
                    <h2>Catatan Aktif</h2>
                    <NoteList 
                    notes={this.state.notes} 
                    onDelete={this.onDeleteEventEventHandler}
                    onArchive={this.onArchiveEventEventHandler} />
                </div>
            </React.Fragment>
        )
    }
}
export default NoteApp;
