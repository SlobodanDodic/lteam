import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Text,
  Flex,
  Link,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
// import { GiSteeringWheel } from "react-icons/gi";

export default function Leftbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex w="100vw" justifyContent="space-between" alignItems="center" p="11px" zIndex="1">
      <HamburgerIcon
        onClick={onOpen}
        color="black"
        h="1.25em"
        w="1.25em"
        _hover={{
          cursor: "pointer",
        }}
      />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent
          bgColor="#b1b1b1de"
          _before={{
            content: '""',
            position: "absolute",
            top: "0%",
            left: "5px",
            width: "26px",
            height: "100vh",
            bgColor: "#4a527a",
            zIndex: "-1",
          }}
        >
          <DrawerCloseButton zIndex="1" />

          <DrawerHeader borderBottomWidth="1px" fontFamily={`'Mars', sans-serif`} fontSize="1rem" p="11px">
            <span style={{ color: "white" }}>L </span>
            <span style={{ color: "#4a527a" }}>TEAM</span>
          </DrawerHeader>
          <DrawerBody
            display="flex"
            flexDirection="column"
            ps="40px"
            letterSpacing="2px"
            fontWeight="600"
            _before={{
              content: '""',
              position: "absolute",
              bottom: "1%",
              left: "12%",
              width: "86%",
              height: "100%",
              bg: "url(/fiat.png)",
              bgSize: "contain",
              bgRepeat: "no-repeat",
              bgPosition: "center bottom",
              filter: "opacity(0.47)",
            }}
          >
            <Link href="/" pb="15px" _hover={{ textDecoration: "overline", color: "#2531709e" }} zIndex="1">
              home
            </Link>
            <Link href="/gallery" pb="15px" _hover={{ textDecoration: "overline", color: "#2531709e" }} zIndex="1">
              galerija
            </Link>
            <Link href="/info" pb="15px" _hover={{ textDecoration: "overline", color: "#2531709e" }} zIndex="1">
              informacije
            </Link>
            <Link href="/contact" pb="15px" _hover={{ textDecoration: "overline", color: "#2531709e" }} zIndex="1">
              kontakt
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Text as={Link} href="/" fontFamily={`'Mars', sans-serif`} _hover={{ textDecoration: "none" }}>
        <span style={{ color: "#e6e6e6" }}>L </span>
        TEAM
      </Text>
    </Flex>
  );
}
