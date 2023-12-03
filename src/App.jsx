import { AbsoluteCenter, Box } from "@chakra-ui/react";
import React from "react";
import { Editable, EditablePreview, EditableTextarea } from "@chakra-ui/react";

function App() {
  return (
    <>
      <p>Jojo</p>
      <Editable defaultValue="Take some chakra">
        <EditablePreview />
        <EditableTextarea />
      </Editable>
    </>
  );
}

function Jojo() {}

export default App;
