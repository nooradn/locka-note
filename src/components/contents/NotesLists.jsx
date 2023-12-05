import React from "react";
import NoteItem from "./NoteItem.jsx";
import allNotesData from "../../allNotesData.js";

function NoteLists() {
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
