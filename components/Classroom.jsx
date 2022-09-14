import { Box, Heading, Image, Text, Container } from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";

const classrooms = [
  {
    title: "Prijemna prostorija",
    img: "/classroom/1.jpg",
    text: "Mesto na kojem Vas dočekuje naše osoblje koje će Vam pomoći oko svih mogućih nedoumica.",
    address: "Avrama Mrazovića 1, Sombor",
  },
  {
    title: "Učionica",
    img: "/classroom/2.jpg",
    text: "U učionici svaki polaznik ima obezbeđeno mesto za pohađanje nastave.",
    address: "Avrama Mrazovića 1, Sombor",
  },
  {
    title: "IT Oprema",
    img: "/classroom/3.jpg",
    text: "Svaki polaznik ima obezbeđen laptop i pristup kompletnom materijalu koji je neophodan za uspešno polaganje ispita.",
    address: "Avrama Mrazovića 1, Sombor",
  },
  {
    title: "Saobraćajni znaci",
    img: "/classroom/4.jpg",
    text: "Saobraćajna signalizacija (saobraćajni znakovi) u Republici Srbiji uređeni su Pravilnikom o saobraćajnoj signalizaciji (Službeni glasnik RS, 134/14) koji je na snazi od 19.12.2014. godine. ",
    address: "Avrama Mrazovića 1, Sombor",
  },
];

export default function Classroom() {
  return (
    <>
      {classrooms.map((classroom) => (
        <Container key={classroom.title} maxW={"7xl"} p="3vh 5vh" borderBottom="1px solid #00000014">
          <Box display="flex" m="2vh 0vh" flexDirection={{ base: "column", sm: "row" }} justifyContent="space-between">
            <Box display="flex" flex="1" marginRight="2" position="relative" alignItems="center">
              <Parallax scale={[0.85, 1, "easeIn"]}>
                <Box width={{ base: "100%", sm: "85%" }} zIndex="2" marginLeft={{ base: "0", sm: "5%" }}>
                  <Image borderRadius="lg" src={classroom.img} alt="some good alt text" objectFit="contain" />
                </Box>
              </Parallax>

              <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box backgroundSize="20px 20px" opacity="0.4" height="100%" />
              </Box>
            </Box>

            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="space-evenly"
              marginTop={{ base: "3", sm: "0" }}
            >
              <Parallax speed={5}>
                <Heading size="md" marginTop="1">
                  {classroom.title}
                </Heading>

                <Text maxW="300px" marginTop="2">
                  {classroom.text}
                </Text>
              </Parallax>

              <Text marginTop="2">{classroom.address}</Text>
            </Box>
          </Box>
        </Container>
      ))}
    </>
  );
}
