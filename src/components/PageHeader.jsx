import React from "react";
import {
  Flex,
  Spacer,
  Button,
  Center,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import LogoIcon from "./LogoIcon";
import { Search2Icon } from "@chakra-ui/icons";

const PageHeader = () => {
  return (
    <Flex m={3} minWidth="max-content" alignItems="center" gap="2">
      <LogoIcon />
      <Spacer />
      <Center>
        <InputGroup>
          <Input size="md" w={250} placeholder="Search note..."></Input>
          <InputRightElement>
            <Button size="sm" mr={1}>
              <Search2Icon />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Center>
    </Flex>
  );
};

export default PageHeader;
