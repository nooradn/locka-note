import {
  Card,
  Grid,
  Heading,
  Center,
  Text,
  Spacer,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";

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
          gap={5}
        >
          <NotesItem />
          <NotesItem />
          <NotesItem />
          <NotesItem />
          <NotesItem />
          <NotesItem />
          <NotesItem />
          <NotesItem />
          <NotesItem />
          <NotesItem />
        </Grid>
      </Center>
    </>
  );
}

function NotesItem() {
  return (
    <>
      <Card
        w={300}
        h={400}
        p={5}
        boxShadow="lg"
        outline="1px solid rgba(153, 143, 255, 0.38)"
      >
        <Heading size="md">Note Title</Heading>
        <Text marginBlock={1} fontSize="xs" color="purple.500">
          4 Desember 2023
        </Text>
        <Text marginBlock={1} fontSize="sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus repellat cupiditate aliquid eveniet dicta velit optio,
          error minus id ipsa vitae consectetur fugiat. Autem optio enim
          possimus odio ratione! Quo?
        </Text>
        <Spacer />
        <Flex>
          <Spacer />
          <Button colorScheme="red" size="sm" variant="outline">
            Delete
          </Button>
        </Flex>
      </Card>
    </>
  );
}

export default SavedNotes;
