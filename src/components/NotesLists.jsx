import React from "react";
import NoteItem from "./NoteItem";

function NoteLists() {
  return (
    <>
      {/* NOTES LISTS */}
      <NoteItem title="Koko" date="25 November 2022" content="fdfs" />
      <NoteItem title={lorem} date={ddate} content={llorem} />
    </>
  );
}

export default NoteLists;



let lorem = "Lorem ipsum";
let ddate = '4 Desember 2023'
let llorem = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
Necessitatibus repellat cupiditate aliquid eveniet dicta velit optio,
error minus id ipsa vitae consectetur fugiat. Autem optio enim
possimus odio ratione! Quo? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
Necessitatibus repellat cupiditate aliquid eveniet dicta velit optio,
error minus id ipsa vitae consectetur fugiat.`;