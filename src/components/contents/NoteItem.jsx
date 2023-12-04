import React from "react";
import { Card, Heading, Text, Spacer, Button, Flex } from "@chakra-ui/react";

function NoteItem({ id, title, date, content, isArchived }) {
  // Make date as human readable
  const prepareDate = new Date(date);
  const humanReadableDate = prepareDate.toLocaleString();

  // Return note item card
  return (
    <>
      <Card
        w={300}
        h={350}
        p={5}
        boxShadow="lg"
        outline="1px solid rgba(153, 143, 255, 0.25)"
      >
        <Heading size="md">{title}</Heading>
        <Text marginBlock={1} fontSize="xs" color="purple.500">
          {humanReadableDate}
        </Text>
        <Text marginBlock={1} fontSize="sm">
          {content}
        </Text>
        <Spacer />
        <Flex>
          <Spacer />
          {/* TOOD: Dispatch trigger with note ID */}
          <Button colorScheme="red" size="sm" variant="outline">
            Delete
          </Button>
        </Flex>
      </Card>
    </>
  );
}

export default NoteItem;
