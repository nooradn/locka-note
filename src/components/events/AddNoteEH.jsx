import allNotesData from "../NotesData";

function AddNoteEH(formData) {
  const noteID = allNotesData[allNotesData.length - 1].id + 1;
  const newNoteData = {
    id: noteID,
    title: formData.title,
    body: formData.content,
    archived: false,
    createdAt: new Date().toISOString(),
  };

  allNotesData.push(newNoteData);
  console.log(allNotesData);
}

export default AddNoteEH;
