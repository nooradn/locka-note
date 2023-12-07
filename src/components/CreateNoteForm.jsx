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
  Text,
  HStack,
  VStack,
} from "@chakra-ui/react";
import allNotesData from "../data-all-notes.js";

// Stateful component or class component
class CreateNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNotEmpty: this.props.isNotEmpty,
      formData: {
        id: 0,
        title: "",
        body: "",
        archived: false,
        createdAt: "",
      },
      charLeft: 50,
    };
  }

  // Handler when typing or form changed
  handleInputOnChange = (e) => {
    if (e.target.value.length <= 50) {
      this.setState({
        isNotEmpty: this.props.isNotEmpty,
        formData: {
          ...this.state.formData,
          [e.target.name]: e.target.value,
        },
      });

      // Prevent for giving title for max 50 chars
      if (e.target.value.length <= 50) {
        this.setState({charLeft : 50 - e.target.value.length})
      }
      console.log("charleft", this.state.charLeft);
    }
  };

  // Handler when clicked submit or 'Add note' button
  handleOnSubmitForm = () => {
    const updateSharedNoteState = this.props.updateSharedNoteState;

    let uniqueNoteID;
    if (allNotesData.length > 0) {
      uniqueNoteID = allNotesData[allNotesData.length - 1].id + 1;
    } else {
      uniqueNoteID = 1;
    }

    let uniqueNowTime = new Date().toISOString();

    // this.setState({ isNotEmpty: true });
    console.log(this.state.isNotEmpty, "in handler craeteform");

    // Prepare form data
    this.setState(
      (prevState) => ({
        formData: {
          ...prevState.formData, // contains title, body
          archived: false,
          id: uniqueNoteID,
          createdAt: uniqueNowTime,
        },
      }),

      // Validation for at least one input is filled
      () => {
        if (this.state.formData.title || this.state.formData.body) {
          allNotesData.push(this.state.formData);
          updateSharedNoteState();
          this.isAlertShowed = false;
        } else {
          this.isAlertShowed = true;
          updateSharedNoteState();
        }
      }
    );
  };

  // Render the UI
  render() {
    return (
      <Center>
        <FormControl maxW={550} m={30}>
          <HStack>
            <Heading mt={50} mb={3} size="lg">
              Create Note
            </Heading>
            <Spacer />
            <Center pt={45}>
              <Text fontSize="xs" align="center" justifyContent="center">
                Char left: {this.state.charLeft}
              </Text>
            </Center>
          </HStack>
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
            name="body"
            type="text"
            placeholder="Note here"
            mb={3}
            h={150}
            size="sm"
            value={this.state.formData.content}
            onChange={this.handleInputOnChange}
          />
          <Flex>
            <Center>
              <Text color="red" paddingInline={1} hidden={!this.isAlertShowed}>
                Please fill any title/note first...
              </Text>
            </Center>
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
