import React from "react";

function SearchNote({ searchTerm, onSearchChange }) {
  const handleChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Search notes"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchNote;