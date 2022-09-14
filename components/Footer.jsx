import { Box, Container, Img, Link, Stack, Text } from "@chakra-ui/react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <Box width="100vw" color="#e4e4e5" bgColor="#1f1f1f9e" mt="5vh">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={7}
        spacing={4}
        justify={"center"}
        align={"center"}
        borderTop="1px solid #ffffff2b"
      >
        <Img
          src="/logo.png"
          alt="logo"
          w="19vh"
          h="6vh"
          transform="skewX(10deg)"
          opacity="0.35"
          filter="drop-shadow(2px 3px 0px black)"
        />
        <Stack direction={"row"} spacing={6}>
          <Link href="/" _hover={{ textDecoration: "overline", color: "#8c98d3" }}>
            Home
          </Link>
          <Link href="/gallery" _hover={{ textDecoration: "overline", color: "#8c98d3" }}>
            Galerija
          </Link>
          <Link href="/info" _hover={{ textDecoration: "overline", color: "#8c98d3" }}>
            Info
          </Link>
          <Link href="/contact" _hover={{ textDecoration: "overline", color: "#8c98d3" }}>
            Kontakt
          </Link>
        </Stack>
      </Container>

      <Box borderBottom="1px solid #ffffff2b" borderTop="1px solid #ffffff2b">
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text fontSize="0.85rem">Copyright © 2022, L Team Sombor</Text>
          <Stack direction={"row"} spacing={6}>
            <Link
              href={"https://www.facebook.com/Auto-%C5%A1kola-L-Team-100691768193421/?ref=page_internal"}
              isExternal
            >
              <FaFacebook name="external-link" mx="2px" />
            </Link>

            <Link href={"https://www.instagram.com/autoskolalteam/?hl=en"} isExternal>
              <FaInstagram name="external-link" mx="2px" />
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
