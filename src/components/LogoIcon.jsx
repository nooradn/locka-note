import React from "react";
import { Heading, Center } from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";

const LogoIcon = ({ textColor, scale }) => {
  const scaleIcon = {
    transform: `scale(${scale})`,
  };

  return (
    <Center style={scaleIcon} paddingInline={3}>
      <Center>
        <LockIcon mr={2} color={"purple.400"} boxSize='1.3em' />
      </Center>
      <Heading size="md" color={textColor}>
        LockaNote
      </Heading>
    </Center>
  );
};

export default LogoIcon;
