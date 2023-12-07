import { Grid, Heading, Center, VStack, Text } from "@chakra-ui/react";
import React from "react";
import NoteItem from "./NoteItem.jsx";
import allNotesData from "./../data-all-notes";

class NotesGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNotEmpty: this.props.isNotEmpty,
      sharedNoteState: this.props.sharedNoteState,
    };
  }

  updateSharedNoteState = () => {
    if (this.state.sharedNoteState.length === 0) {
      this.setState({ isNotEmpty: true });
    } else {
      this.setState({ isNotEmpty: false });
    }
    this.props.updateSharedNoteState();
    // console.log(this.state.isNotEmpty)
    // console.log(this.state.sharedNoteState)
  };

  // Render the UI
  render() {
    return (
      <>
        <Center>
          <VStack mt={100} mb={50} marginInline={50}>
            <Heading size="lg" hidden={this.state.isNotEmpty}>
              📕 Saved Notes
            </Heading>
            <Heading size="lg" hidden={!this.state.isNotEmpty}>
              No notes yet ❌
            </Heading>
            <Text>Total notes: {this.state.sharedNoteState.length}</Text>
          </VStack>
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
              this.state.sharedNoteState.map(
                ({ id, title, body, createdAt, archived }) => (
                  <NoteItem
                    key={id}
                    id={id}
                    title={title}
                    date={createdAt}
                    content={body}
                    isArchived={archived}
                    onClickEvent={() => {
                      this.updateSharedNoteState();
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
