import React from "react";
import { Flex, Spacer, Heading, Button, Center } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";

function PageHeader() {
  return (
    <Flex m={3} minWidth="max-content" alignItems="center" gap="2">
      <Flex p="2">
        <Center>
          <MoonIcon mr={2} color={"purple.400"} />
        </Center>
        <Heading size="md">NotaNote</Heading>
      </Flex>
      <Spacer />
      <Button size='sm'>About Us</Button>
    </Flex>
  );
}

export default PageHeader;
