// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types';

function NoteItemContent({ title, createdAt, body }){
    return(
        <div className="note-item__content">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__date">{createdAt}</p>
            <p className="note-item__body">{body}</p>
        </div>
    )
}
NoteItemContent.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
}
export default NoteItemContent;