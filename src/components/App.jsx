import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createNote(noteElement) {
  return (
    <Note
      key={noteElement.key}
      title={noteElement.title}
      content={noteElement.content}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNote)};
      <Footer />
    </div>
  );
}

export default App;
