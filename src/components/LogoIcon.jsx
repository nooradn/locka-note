import React from "react";
import { Heading, Center } from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";

const LogoIcon = ({ textColor, scale, isVertical }) => {
  const scaleIcon = { transform: `scale(${scale})` };
  const columnMode = isVertical ? { flexDirection: "column" } : null;

  return (
    <Center style={{ ...scaleIcon, ...columnMode }} paddingInline={3}>
      <Center>
        <LockIcon mr={2} color={"purple.400"} boxSize="1.7em" m={1} />
      </Center>
      <Heading size="md" color={textColor}>
        LockaNote
      </Heading>
    </Center>
  );
};

export default LogoIcon;
