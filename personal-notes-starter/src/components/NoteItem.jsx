import React from "react";
import ActionButton from "./ActionButton";
import NoteItemContent from "./NoteItemContent";

function NotesItem({title, body, createdAt, id, onDelete, onArchive}){
    return(
        <div className="note-item">
            <NoteItemContent title={title} createdAt={createdAt} body={body} />
            <ActionButton id={id} onDelete={onDelete} onArchive={onArchive} />
        </div>
    )
}

export default NotesItem;