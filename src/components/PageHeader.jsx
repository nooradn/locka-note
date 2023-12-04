import React from "react";
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Button,
  Center,
} from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";

function PageHeader() {
  return (
    <>
      <Box>
        <Flex m={5} minWidth="max-content" alignItems="center" gap="2">
          <Flex p="2">
            <Center>
              <MoonIcon mr={2} color={'purple.400'}/>
            </Center>
            <Heading size="md">NotaNote</Heading>
          </Flex>
          <Spacer />
            <Button >About</Button>
        </Flex>
      </Box>
    </>
  );
}

export default PageHeader;
