import React from "react";
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

class CreateNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        title: "",
        content: "",
      },
    };
  }

  handleInputOnChange = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleOnSubmitForm = () => {
    console.log("clicked submit form");
    console.log(this.state.formData);

  };

  render() {
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
            value={this.state.formData.title}
            onChange={this.handleInputOnChange}
          />
          <Textarea
            name="content"
            type="text"
            placeholder="Note here"
            mb={3}
            h={150}
            size="sm"
            value={this.state.formData.content}
            onChange={this.handleInputOnChange}
          />
          <Flex>
            <Spacer />
            <Button
              colorScheme="purple"
              leftIcon={<AddIcon />}
              onClick={this.handleOnSubmitForm}
            >
              Add note
            </Button>
          </Flex>
        </FormControl>
      </Center>
    );
  }
}

export default CreateNoteForm;
