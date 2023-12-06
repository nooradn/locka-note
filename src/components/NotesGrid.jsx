import { Grid, Heading, Center } from "@chakra-ui/react";
import React from "react";
import allNotesData from "../data-all-notes.js";
import NoteItem from "./NoteItem.jsx";

class NotesGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notesData: allNotesData,
    };
  }

  updateNote = () => {
    this.setState((this.state.notesData = allNotesData));
    console.log("clicked updateNote");
  };

  // Render the UI
  render() {
    return (
      <>
        <Center>
          <Heading mt={100} mb={50} marginInline={50} size="lg">
            📕 Saved Notes
          </Heading>
        </Center>
        <Center>
          <Grid
            mx={50}
            my={5}
            // Make it responsive
            templateColumns={{
              xl: "repeat(4, 1fr)",
              lg: "repeat(3, 1fr)",
              md: "repeat(2, 1fr)",
              sm: "repeat(1, 1fr)",
            }}
            gap={9}
          >
            {
              // Map all data for each note
              this.state.notesData.map(
                ({ id, title, body, createdAt, archived }) => (
                  <NoteItem
                    key={id}
                    id={id}
                    title={title}
                    date={createdAt}
                    content={body}
                    isArchived={archived}
                    onClickEvent={() => {
                      this.updateNote();
                    }}
                  />
                )
              )
            }
          </Grid>
        </Center>
      </>
    );
  }
}

export const displayyyyyyy = () => {
  NotesGrid.updateNote;
};

export default NotesGrid;
