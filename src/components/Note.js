import React from "react";
import deleteNote from "../api/deleteNote.js";

export default function Note(props) {
  const obj = props.data.i;
  const index = props.data.index;
  return (
    <div className="note">
      <div className="deleter_cnt">
        <a
          className="deleter"
          href="#"
          id={index}
          onClick={() => {
            document.getElementById(index).addEventListener("click", (e) => {
              e.preventDefault();
              deleteNote(index);
            });
          }}
        />
      </div>
      <h1 className="note_hedear">{obj.header}</h1>
      <p className="note_text">{obj.text}</p>
    </div>
  );
}
