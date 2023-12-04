import React from "react";
import { Card, Heading, Text, Spacer, Button, Flex } from "@chakra-ui/react";

function NoteItem({ title, date, content }) {
  return (
    <>
      <Card
        w={300}
        h={400}
        p={5}
        boxShadow="lg"
        outline="1px solid rgba(153, 143, 255, 0.25)"
      >
        <Heading size="md">{title}</Heading>
        <Text marginBlock={1} fontSize="xs" color="purple.500">
          {date}
        </Text>
        <Text marginBlock={1} fontSize="sm">
          {content}
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



export default NoteItem;
