import React from "react";
import { Spacer, Center, VStack, Text } from "@chakra-ui/react";
import LogoIcon from "./LogoIcon";

const PageFooter = () => {
  return (
    <Center bg="purple.900" h={250} mt='5rem' >
      <Spacer />
      <VStack>
        <LogoIcon textColor="white" scale={1.5} isVertical={true}/>
        <Text color='rgba(255, 255, 255, 0.5)' mt={4}>
        Created by Noor Adn Using Vite + React.js + Chakra UI
        </Text>
        <Text color="purple.500" fontSize="sm" >
          All Rights Reserved
        </Text>
      </VStack>
      <Spacer />
    </Center>
  );
};

export default PageFooter;
