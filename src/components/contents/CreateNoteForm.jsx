import React from "react";
import { useState } from "react";
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
import "../../events/addNoteEH.js";
import addNoteEH from "../../events/addNoteEH.js";

const CreateNoteForm = () => {
  const [formData, setForm] = useState({
    title: "",
    content: "",
  });

  const handleInputOnChange = (e) => {
    setForm({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmitForm = () => {
    addNoteEH(formData);
    console.log("clicked submit form");
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
          onChange={handleInputOnChange}
        />
        <Textarea
          name="content"
          type="text"
          placeholder="Note here"
          mb={3}
          h={150}
          size="sm"
          value={formData.content}
          onChange={handleInputOnChange}
        />
        <Flex>
          <Spacer />
          <Button
            colorScheme="purple"
            leftIcon={<AddIcon />}
            onClick={handleOnSubmitForm}
          >
            Add note
          </Button>
        </Flex>
      </FormControl>
    </Center>
  );
};

export default CreateNoteForm;
