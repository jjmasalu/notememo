import react, { useState, useContext } from "react";
import { globalState } from "./GlobalState";

function AddNote(props) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const { notesList, addNote } = useContext(globalState);

  return (
    <div className="note form">
      <h1>Add a New Note</h1>
      <form className="add-note-form">
        <h1>
          <input
            className="title"
            type="text"
            placeHolder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </h1>
        <p>
          <input
            className="note-paragraph"
            type="text"
            placeHolder="Take a note..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </p>
      </form>
      <button
        className="add-note-btn"
        onClick={(e) => {
          e.preventDefault();
          const newNote = {
            id: notesList.length + 1,
            title: title,
            content: note,
          };
          addNote(newNote);

          setTitle("");
          setNote("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddNote;
