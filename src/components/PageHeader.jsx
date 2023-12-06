import React from "react";
import { Flex, Spacer, Heading, Button, Center } from "@chakra-ui/react";
import LogoIcon from "./LogoIcon";

const PageHeader = () => {
  return (
    <Flex m={3} minWidth="max-content" alignItems="center" gap="2">
      <LogoIcon />
      <Spacer />
      <Button
        size="sm"
        onClick={() =>
          alert("Created by Noor Adn \nUsing Vite + React.js + Chakra UI")
        }
      >
        About Us
      </Button>
    </Flex>
  );
};

export default PageHeader;
