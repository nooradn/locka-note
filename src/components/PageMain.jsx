import React from "react";
import CreateNoteForm from "./CreateNoteForm";
import NotesGrid from "./NotesGrid";
import allNotesData from "../data-all-notes.js";

class PageMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sharedNoteState: allNotesData,
    };
  }

  updateSharedNoteState = () => {
    this.setState({ sharedNoteState: allNotesData });
    console.log("updated display");
  };

  render() {
    return (

        <>
        <CreateNoteForm
        sharedNoteState={this.state.sharedNoteState}
        updateSharedNoteState={this.updateSharedNoteState}
        />
        <NotesGrid
        sharedNoteState={this.state.sharedNoteState}
        updateSharedNoteState={this.updateSharedNoteState}
        />
        </>
    );
  
  }
}

// const doddy = () => {
//   console.log("Jojo clicked");
//   () => {
//     PageMain.updateDisplay();
//   };
// };

// export { doddy };
export default PageMain;
