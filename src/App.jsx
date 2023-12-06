import React from "react";
import PageHeader from "./components/PageHeader.jsx";
import CreateNoteForm from "./components/CreateNoteForm.jsx";
import NotesGrid from "./components/NotesGrid.jsx";
import PageFooter from "./components/PageFooter.jsx";

const App = () => {
  return (
    <>
      <PageHeader />
      <CreateNoteForm />
      <NotesGrid />
      <PageFooter />
    </>
  );
}

export default App;
