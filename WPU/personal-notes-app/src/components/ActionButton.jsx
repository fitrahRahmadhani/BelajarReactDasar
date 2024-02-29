// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

function ActionButton({ id, onArchive, onDelete }) {
  return (
    <div className="note-item__action">
      <ArchiveButton id={id} onArchive={onArchive} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

ActionButton.propTypes = {
    id: PropTypes.string.isRequired,
    onArchive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default ActionButton;
