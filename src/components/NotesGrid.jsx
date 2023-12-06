import { Grid, Heading, Center } from "@chakra-ui/react";
import React from "react";
import allNotesData from "../data-all-notes.js";
import NoteItem from "./NoteItem.jsx";

const NotesGrid = () => {
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
            allNotesData.map(({ id, title, body, createdAt, archived }) => (
              <NoteItem
                key={id}
                id={id}
                title={title}
                date={createdAt}
                content={body}
                isArchived={archived}
              />
            ))
          }
        </Grid>
      </Center>
    </>
  );
};

export default NotesGrid;
