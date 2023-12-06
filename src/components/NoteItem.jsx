import React from "react";
import { showFormattedDate } from "../data-initial.js";
import { Card, Heading, Text, Spacer, Button, Flex } from "@chakra-ui/react";

const NoteItem = ({ id, title, date, content, isArchived }) => {
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
      <Text marginBlock={1} fontSize="xs" color="purple.500">
        {showFormattedDate(date)}
      </Text>
      <Text marginBlock={1} fontSize="sm">
        {content}
      </Text>
      <Spacer />
      <Flex>
        <Spacer />
        <Button
          colorScheme="red"
          size="sm"
          variant="outline"
          // TOOD: Dispatch trigger with note ID
          onClick={() => console.log("clicked delete with noteID:", id)}
        >
          Delete
        </Button>
      </Flex>
    </Card>
  );
};

export default NoteItem;
