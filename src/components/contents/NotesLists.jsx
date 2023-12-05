import React from "react";
import NoteItem from "./NoteItem.jsx";
import allNotesData from "../../allNotesData.js";
import { useState } from "react";

const NoteLists = (formData) => {
  const [notes, setNotes] = useState(allNotesData);

  const noteID = notes[notes.length - 1].id + 1;
  const newNoteData = {
    id: noteID,
    title: formData.title,
    body: formData.content,
    archived: false,
    createdAt: new Date().toISOString(),
  };

  // const updateNotes = setNotes([...notes, newNoteData]);
  // allNotesData.push(newNoteData);
  // // console.log(allNotesData);

  return (
    <>
      {allNotesData.map(({ id, title, body, createdAt, archived }) => (
        <NoteItem
          key={id}
          id={id}
          title={title}
          date={createdAt}
          content={body}
          isArchived={archived}
        />
      ))}
    </>
  );
}

export default NoteLists;
