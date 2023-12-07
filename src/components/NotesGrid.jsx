import { Grid, Heading, Center } from "@chakra-ui/react";
import React from "react";
import NoteItem from "./NoteItem.jsx";

class NotesGrid extends React.Component {
  // Render the UI
  render() {
    const sharedNoteState = this.props.sharedNoteState;
    const updateSharedNoteState = this.props.updateSharedNoteState;
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
              sharedNoteState.map(
                ({ id, title, body, createdAt, archived }) => (
                  <NoteItem
                    key={id}
                    id={id}
                    title={title}
                    date={createdAt}
                    content={body}
                    isArchived={archived}
                    onClickEvent={() => {
                      // TODO: DELETE NOTE WITH ID
                      updateSharedNoteState();
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

export default NotesGrid;
{
}
