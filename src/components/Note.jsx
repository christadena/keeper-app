import React from "react";
import "./Button.css";


function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick} className="delete-btn">
        🗑️
      </button>
    </div>
  );
}

export default Note;
