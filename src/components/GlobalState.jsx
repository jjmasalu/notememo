import react, { useState, createContext } from "react";
import notes from "../notes";

export const globalState = createContext();

function GlobalProvider({ children }) {
  const [notesList, setNotes] = useState(notes);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  return (
    <globalState.Provider value={{ notesList, addNote }}>
      {children}
    </globalState.Provider>
  );
}

export default GlobalProvider;
