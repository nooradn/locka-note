import {
  Grid,
  Heading,
  Center,
} from "@chakra-ui/react";
import React from "react";
import NoteLists from "./NotesLists.jsx";

function SavedNotes() {
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
          templateColumns={{
            xl: "repeat(4, 1fr)",
            lg: "repeat(3, 1fr)",
            md: "repeat(2, 1fr)",
            sm: "repeat(1, 1fr)",
          }}
          gap={9}
        >
          <NoteLists/>

        </Grid>
      </Center>
    </>
  );
}

export default SavedNotes;
