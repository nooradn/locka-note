import {
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Textarea,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

function CreateNoteForm() {
  return (
    <Center>
      <FormControl maxW={550} m={30}>
        <Heading mb={3} size="lg">
          Create Note
        </Heading>
        <Input type="text" placeholder="Title" mb={3} size="lg" />
        <Textarea
          type="text"
          placeholder="Note here"
          mb={3}
          h={150}
          size="sm"
        />
        <Flex>
          <Spacer />
          <Button colorScheme="purple">Add note</Button>
        </Flex>
      </FormControl>
    </Center>
  );
}

export default CreateNoteForm;
