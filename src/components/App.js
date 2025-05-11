import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddNote from "./AddNote";
import CreateNotes from "./CreateNotes";

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
