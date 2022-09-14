import { Heading, Avatar, Box, Image, Flex, Text, Stack, Button } from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";

const teams = [
  {
    name: "Milica Milić",
    img: "/team/milica.jpg",
    imgBg: "/team/milicaBg.jpg",
    job: "Predavač, Ispitivač, Instruktor",
    phone: "064 952 5317",
    mail: "autoskolalteam@gmail.com",
    speed: 20,
  },
  {
    name: "Nikola Kokot",
    img: "/team/nikola.jpg",
    imgBg: "/team/nikolaBg.jpeg",
    job: "Ispitivač, Instruktor",
    phone: "063 534 166",
    mail: "autoskolalteam@gmail.com",
    speed: 10,
  },
  {
    name: "Milan Bašić",
    img: "/team/milan.jpg",
    imgBg: "/team/milanBg.jpeg",
    job: "Instruktor",
    phone: "025 5101 101",
    mail: "autoskolalteam@gmail.com",
    speed: 40,
  },
  {
    name: "Ivana Ferenčević",
    img: "/team/ivana.jpg",
    imgBg: "/team/ivanaBg.jpeg",
    job: "Administracija",
    phone: "025 5101 101",
    mail: "autoskolalteam@gmail.com",
    speed: 30,
  },
];

export default function Team() {
  return (
    <>
      <Heading
        color="#000c4473"
        textShadow="1px 1px 1px #b3b3b3"
        textAlign="center"
        letterSpacing="5px"
        size="3xl"
        pb={"7"}
        mt="-5vh"
      >
        Naš tim
      </Heading>
      <Flex
        w="full"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
        py={8}
      >
        {teams.map((team) => (
          <Parallax speed={team.speed} key={team.name}>
            <Box
              // key={team.name}
              maxW={"270px"}
              w={"full"}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
              bgColor="#00000096"
              m={"2"}
            >
              <Image h={"180px"} w={"full"} src={team.imgBg} objectFit={"cover"} filter="grayscale(0.5)" />
              <Flex justify={"center"} mt={-16}>
                <Avatar
                  size={"2xl"}
                  src={team.img}
                  alt={"Nikola"}
                  css={{
                    border: "2px solid white",
                  }}
                />
              </Flex>

              <Box p={6}>
                <Stack spacing={0} align={"center"} mb={5}>
                  <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"} color="#5a6289">
                    {team.name}
                  </Heading>
                  <Text color={"gray.300"}>{team.job}</Text>
                </Stack>

                <Stack direction={"row"} justify={"center"} spacing={6}>
                  <Stack spacing={0} align={"center"}>
                    <Text fontSize={"sm"} color={"gray.300"}>
                      {team.mail}
                    </Text>
                  </Stack>
                </Stack>

                <Button
                  w={"full"}
                  mt={6}
                  color={"white"}
                  bgColor="#5a6289"
                  rounded={"md"}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                >
                  {team.phone}
                </Button>
              </Box>
            </Box>
          </Parallax>
        ))}
      </Flex>
    </>
  );
}
