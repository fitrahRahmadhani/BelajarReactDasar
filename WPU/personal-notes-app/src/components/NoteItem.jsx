// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types';
import NoteItemContent from "./NoteItemContent";
import ActionButton from "./ActionButton";


function NoteItem({ id, title, body, createdAt, onArchive, onDelete}){
    return(
        <div className="note-item">
            <NoteItemContent title={title} body={body} createdAt={createdAt} />
            <ActionButton id={id} onArchive={onArchive} onDelete={onDelete} />
        </div>
    )
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    onArchive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}
export default NoteItem;