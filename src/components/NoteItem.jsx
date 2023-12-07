import React from "react";
import { showFormattedDate } from "../data-initial.js";
import { Card, Heading, Text, Spacer, Button, Flex } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import allNotesData from "./../data-all-notes";

const NoteItem = ({ id, title, date, content, isArchived, onClickEvent }) => {
  // Delete note function
  const deleteObjWithID = (idToDelete) => {
    const indexToDelete = allNotesData.findIndex(
      (obj) => obj.id === idToDelete
    );
    allNotesData.splice(indexToDelete, 1);
  };

  // Return note item card
  return (
    <Card
      w={330}
      h={350}
      p={5}
      boxShadow="lg"
      outline="1px solid rgba(153, 143, 255, 0.25)"
    >
      <Heading size="md">{title}</Heading>
      <Text marginBlock={1} fontSize="sm">
        {content}
      </Text>
      <Spacer />
      <Flex>
        <Text marginBlock={1} fontSize="xs" color="purple.500">
          {showFormattedDate(date)}
        </Text>
        <Spacer />
        <Button
          marginInline={1}
          colorScheme="purple"
          size="xs"
          variant="outline"
          onClick={() => {
            // TOOD: Dispatch trigger with note ID
            console.log("archived noteID:", id);
            onClickEvent();
          }}
        >
          <CheckIcon />
        </Button>
        <Button
          colorScheme="red"
          size="xs"
          variant="outline"
          onClick={() => {
            deleteObjWithID(id);
            onClickEvent();
          }}
        >
          <CloseIcon />
        </Button>
      </Flex>
    </Card>
  );
};

export default NoteItem;
