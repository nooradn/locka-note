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
} from "@chakra-ui/react";
import allNotesData from "../data-all-notes.js";

// Stateful component or class component
class CreateNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        id: 0,
        title: "",
        body: "",
        archived: false,
        createdAt: "",
      },
    };
  }

  // Handler when typing or form changed
  handleInputOnChange = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
  };

  // Handler when clicked submit or 'Add note' button
  handleOnSubmitForm = () => {
    const updateSharedNoteState = this.props.updateSharedNoteState;
    let uniqueNoteID = allNotesData[allNotesData.length - 1].id + 1;
    let uniqueNowTime = new Date().toISOString();

    this.setState(
      (prevState) => ({
        formData: {
          ...prevState.formData, // contains title, body
          archived: false,
          id: uniqueNoteID,
          createdAt: uniqueNowTime,
        },
      }),
      () => {
        if (this.state.formData.title || this.state.formData.body) {
          console.log("ada judul dan catatannya coy");
          allNotesData.push(this.state.formData);
          // console.log("new data", this.state.formData);
          console.log("all data", allNotesData);
          updateSharedNoteState();
          this.isAlertShowed = false
        } else {
          this.isAlertShowed = true
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
              <Text color='red' paddingInline={1} hidden={!this.isAlertShowed}>Please fill any title/note first</Text>
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
