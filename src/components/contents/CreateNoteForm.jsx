import { AddIcon } from "@chakra-ui/icons";
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
import { useState } from "react";

function CreateNoteForm() {
  const [formData, setForm] = useState({
    title: "",
    content: "",
  });

  const handleInput = (e) => {
    setForm({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e) => {
    console.log(formData);
  };

  return (
    <Center>
      <FormControl maxW={550} m={30}>
        <Heading mt={50} mb={3} size="lg">
          Create Note
        </Heading>
        <Input
          name="title"
          type="text"
          placeholder="Title"
          mb={3}
          size="lg"
          value={formData.title}
          onChange={handleInput}
        />
        <Textarea
          name="content"
          type="text"
          placeholder="Note here"
          mb={3}
          h={150}
          size="sm"
          value={formData.content}
          onChange={handleInput}
        />
        <Flex>
          <Spacer />
          <Button
            colorScheme="purple"
            leftIcon={<AddIcon />}
            onClick={handleSubmitForm}
          >
            Add note
          </Button>
        </Flex>
      </FormControl>
    </Center>
  );
}

export default CreateNoteForm;
