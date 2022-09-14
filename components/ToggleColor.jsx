import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ToggleColor() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      bgColor="transparent"
      color={useColorModeValue("#0e1214", "#4d4d4e")}
      p={0}
      _hover={{
        textDecoration: "none",
        color: "darkgray",
        bgColor: "transparent",
      }}
    >
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
