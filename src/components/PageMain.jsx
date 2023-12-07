import React from "react";
import CreateNoteForm from "./CreateNoteForm";
import NotesGrid from "./NotesGrid";
import allNotesData from "../data-all-notes.js";

class PageMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sharedNoteState: allNotesData,
      isNotEmpty: false,
    };
  }

  updateSharedNoteState = () => {
    this.setState({ sharedNoteState: allNotesData });
  };

  render() {
    return (
      <>
        <CreateNoteForm
          sharedNoteState={this.state.sharedNoteState}
          isNotEmpty={this.state.isNotEmpty}
          updateSharedNoteState={this.updateSharedNoteState}
        />
        <NotesGrid
          sharedNoteState={this.state.sharedNoteState}
          isNotEmpty={this.state.isNotEmpty}
          updateSharedNoteState={this.updateSharedNoteState}
        />
      </>
    );
  }
}

export default PageMain;
