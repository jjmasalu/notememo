import react, { useContext } from "react";
import { globalState } from "./GlobalState";
import Note from "./Note";

function createNote(note) {
  return <Note key={note.key} title={note.title} content={note.content} />;
}

function CreateNotes() {
  const { notesList } = useContext(globalState);

  return <div>{notesList.map((note) => createNote(note))}</div>;
}

export default CreateNotes;
