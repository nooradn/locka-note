// Import React dependencies
import React from "react";
import ReactDOM from "react-dom/client";

// Import Chakra UI CSS
import { ChakraProvider } from "@chakra-ui/react";

// Import main react file
import App from "./App.jsx";

// Manipulate the Virtual DOM & render it
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
