import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AddNote from "./AddNote";
import CreateNotes from "./CreateNotes";
import { globalState } from "./GlobalState";

function App() {
  return (
    <div>
      <Header />
      <AddNote />
      <CreateNotes />
      <Footer />
    </div>
  );
}

export default App;
