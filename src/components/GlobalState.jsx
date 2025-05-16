import react, { useState, createContext } from "react";
import notes from "../notes";

export const globalState = createContext();

function GlobalProvider({ children }) {
  const [notesList, setNotes] = useState(notes);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }
 function deleteNote(id) {
    console.log("deleted", id);
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  return (
    <globalState.Provider value={{ notesList, addNote, deleteNote }}>
      {children}
    </globalState.Provider>
  );
}

export default GlobalProvider;
