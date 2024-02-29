// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types';
import NoteItem from "./NoteItem";

function NoteList({notes, onArchive, onDelete}){
    return(
        <div className="notes-list">
            {notes.map((note) => (
                <NoteItem key={note.id} id={note.id} title={note.title} body={note.body} createdAt={note.createdAt} onArchive={onArchive} onDelete={onDelete} {...note}/>
            ))}
        </div>
    )
}
NoteList.propTypes = {
    notes: PropTypes.object.isRequired,
    onArchive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}
export default NoteList;