import React from "react";
import { Spacer, Center, VStack, Text } from "@chakra-ui/react";
import LogoIcon from "./LogoIcon";

const PageFooter = () => {
  return (
    <Center bg="purple.900" h={250} mt='5rem' >
      <Spacer />
      <VStack>
        <LogoIcon textColor="white" scale={1.5} isVertical={true}/>
        <Text color="purple.500" fontSize="sm" mt={4}>
          All Rights Reserved
        </Text>
      </VStack>
      <Spacer />
    </Center>
  );
};

export default PageFooter;
