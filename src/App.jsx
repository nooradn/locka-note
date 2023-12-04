import React from "react";
import PageHeader from "./components/PageHeader.jsx";
import CreateNoteForm from "./components/CreateForm.jsx";
import SavedNotes from './components/NotesContainer.jsx';

function App() {
  return (
    <>
      <PageHeader /> 
      <CreateNoteForm />
      <SavedNotes/>
    </>
  );
}

export default App;
