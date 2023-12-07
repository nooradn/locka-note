import { Grid, Heading, Center } from "@chakra-ui/react";
import React from "react";
import NoteItem from "./NoteItem.jsx";

class NotesGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerGird: "📕 Saved Notes",
    };
  }
  // Render the UI
  render() {
    const sharedNoteState = this.props.sharedNoteState;

    const updateSharedNoteState = () => {
      if (sharedNoteState.length <= 0) {
        this.setState({ headerGird: "No notes yet ❌" });
        console.log('shared notes length',sharedNoteState.length)
      }
      if (sharedNoteState.length > 0) {
        this.setState({ headerGird: "📕 Saved Notes" });
      }
      console.log('shared notes length',sharedNoteState.length)
      this.props.updateSharedNoteState();
      console.log('after updatesharednotestate' )

    };

    return (
      <>
        <Center>
          <Heading mt={100} mb={50} marginInline={50} size="lg">
            {this.state.headerGird}
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
