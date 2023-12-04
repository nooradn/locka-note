import React from "react";
import NoteItem from "./NoteItem";

// Add the initial notes
import { getInitialData } from "../initial-data.js";
const initNotes = getInitialData();

// New notes data & merge it with initial notes
let newNotesData =[]
let noteListsMerged = [...initNotes, ...newNotesData]

function NoteLists() {
  return (
    <>
      {noteListsMerged.map(({ id, title, body, createdAt, archived }) => (
        <NoteItem
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

// Dummy texts
let lorem = "Lorem ipsum";
let ddate = "4 Desember 2023";
let llorem = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
Necessitatibus repellat cupiditate aliquid eveniet dicta velit optio,
error minus id ipsa vitae consectetur fugiat. Autem optio enim
possimus odio ratione! Quo? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
Necessitatibus repellat cupiditate aliquid eveniet dicta velit optio,
error minus id ipsa vitae consectetur fugiat.`;
