import React from "react";
import { Spacer, Center, VStack, Text } from "@chakra-ui/react";
import LogoIcon from "./LogoIcon";

const PageFooter = () => {
  return (
    <Center bg="purple.900" h={300} >
      <Spacer />
      <VStack>
        <LogoIcon textColor="white" scale={2} />
        <Text color="purple.500" fontSize="sm" mt={4}>
          All Rights Reserved
        </Text>
      </VStack>
      <Spacer />
    </Center>
  );
};

export default PageFooter;
