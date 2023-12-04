import React from "react";
import NoteItem from "./NoteItem.jsx";

// Add the initial notes
import { getInitialData } from "../../initial-data.js";
const initNotes = getInitialData();

// New notes data & merge it with initial notes
let newNotesData = [...initNotes];

function NoteLists() {
  return (
    <>
      {newNotesData.map(({ id, title, body, createdAt, archived }) => (
        <NoteItem
          key={id}
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
