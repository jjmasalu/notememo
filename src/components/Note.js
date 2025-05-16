import React, {useContext} from "react";
import { globalState } from "./GlobalState";

function Note(props) {
  const { deleteNote } = useContext(globalState);

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        className="add-note-btn"
        onClick={() => {
          deleteNote(props.id);
        }}
      >Delete</button>
    </div>
  );
}

export default Note;
