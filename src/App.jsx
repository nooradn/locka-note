import React from "react";
import PageHeader from "./components/PageHeader.jsx";
import CreateNoteForm from "./components/contents/CreateNoteForm.jsx";
import SavedNotes from "./components/contents/NotesContainer.jsx";
import PageFooter from "./components/PageFooter.jsx";

const App = () => {
  return (
    <>
      <PageHeader />
      <CreateNoteForm />
      <SavedNotes />
      <PageFooter />
    </>
  );
}

export default App;
