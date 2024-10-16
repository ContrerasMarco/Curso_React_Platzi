import React, { useState } from "react";
import "./todoSearchStyle.css";
function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <div className="InputPosition">
      <input
        className="styleInput"
        placeholder="Busca tu tarea "
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch };
