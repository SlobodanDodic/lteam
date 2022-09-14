import { Heading, Box, Image, Flex, Center, Text, Stack, List, ListItem, ListIcon } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Parallax } from "react-scroll-parallax";

const teams = [
  {
    title: "Prvi Korak",
    img: "/steps/step-1.jpg",
    subTitle: "Već dugo želiš vozačku dozvolu?",
    textTitle: "Ovo je PRVI KORAK kako doći do nje:",
    bullets: [
      "Upiši se i kreni na časove teorijske obuke!",
      "Teorijska obuka se obavlja u opremljenim učionicama koje poseduju sve kako bi kandidati lakše usvojili gradivo.",
      "Sve što ti je potrebno je važeća lična karta.",
    ],
    speed: 20,
  },
  {
    title: "Drugi Korak",
    img: "/steps/step-2.jpg",
    subTitle: "Nakon završene teorijske obuke sledi teorijski ispit:",
    bullets: [
      "Test u kome je gradivo sa teorijske obuke.",
      "Test se polaže na računarima u našoj školi.",
      "Test traje 45 minuta.",
      "Da biste položili neophodno je imati najmanje 85% od ukupnog broja poena.",
      "Rezultati se dobijaju čim kandidat završi test.",
    ],
    speed: 10,
  },
  {
    title: "Treći Korak",
    img: "/steps/step-3.jpg",
    subTitle: "Nakon završenog teorijskog ispita sledi lekarsko uverenje:",
    bullets: [
      "Da bi kandidat mogao da započne proces praktične obuke, potrebno je da dostavi LEKARSKO UVERENJE.",
      "Da biste preuzeli vozačku dozvolu, uverenje ne sme biti starije od 6 meseci.",
      "Da biste otpočeli praktičnu obuku, uverenje ne sme biti starije od godinu dana.",
    ],
    speed: 30,
  },
  {
    title: "Četvrti Korak",
    img: "/steps/step-4.jpg",
    subTitle: "Krećemo sa PRAKTIČNOM OBUKOM:",
    textTitle: "Sada ste u rukama naših iskusnih instruktora!",
    bullets: [
      "Oni Vas neće samo spremiti za praktični deo ispita, već će Vas pripremiti da budete siguran i bezbedan učesnik u saobraćaju.",
      "Bitno je da znate da se praktična obuka sastoji od 40 časova po 45min vožnje, a Zakonom su predviđena maksimalno dva časa na dan.",
    ],
    speed: 25,
  },
  {
    title: "Peti Korak",
    img: "/steps/step-5.jpg",
    bullets: [
      "Sada je potrebno da prođete kurs prve pomoći, kako bi bili osposobljeni da pomognete sebi ili drugim učesnicima u saobraćaju.",
      "Pre polaganja praktičnog ispita, uz lekarsko uverenje, kandidati su u obavezi priložiti uverenje o PRVOJ POMOĆI",
    ],
    speed: 15,
  },
  {
    title: "Šesti Korak",
    img: "/steps/step-6.jpg",
    bullets: ["Sada je trenutak da u praksi proverite sve što ste naučili u prethodnom periodu"],
    speed: 5,
  },
];

export default function Info() {
  return (
    <>
      <Heading
        color="#464646"
        textShadow="2px 2px 2px #696969"
        textAlign="center"
        letterSpacing="2px"
        size="xl"
        py={"7"}
      >
        Put do vozačke dozvole
      </Heading>

      <Flex
        w="full"
        maxW="1400px"
        m="0 auto"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
        py={8}
      >
        {teams.map((team) => (
          <Parallax speed={team.speed} key={team.title}>
            <Box
              maxW={"380px"}
              m={"3"}
              boxShadow={"2xl"}
              overflow={"hidden"}
              bgColor="#2e2e2e"
              borderRadius="11vh 11vh 0vh"
            >
              <Image src={team.img} w={"full"} filter="opacity(0.75)" borderRadius="11vh" />

              <Box p={6}>
                <Stack
                  position="relative"
                  spacing={0}
                  justifyContent="center"
                  align={"center"}
                  h="75px"
                  mb="20px"
                  _before={{
                    content: '""',
                    position: "absolute",
                    top: "0%",
                    left: "0%",
                    width: "100%",
                    height: "100%",
                    bg: "url(/steps/steps.png)",
                    bgSize: "cover",
                    bgRepeat: "no-repeat",
                    bgPosition: "center",
                    filter: "drop-shadow(2px 4px 6px black)",
                    zIndex: "0",
                  }}
                >
                  <Heading
                    fontSize={"3xl"}
                    fontWeight={700}
                    color="#ffeb3b"
                    letterSpacing="4px"
                    zIndex="0"
                    filter="opacity(0.75)"
                    bgColor="#2f2f2fad"
                  >
                    {team.title}
                  </Heading>
                </Stack>

                <Stack fontSize={"sm"} ps="10px" color="white">
                  <Text>{team.subTitle}</Text>
                  <Text>{team.textTitle}</Text>
                </Stack>

                <Box p="20px 10px" color={"white"} rounded={"md"}>
                  <List spacing={3} py="5px">
                    {team.bullets.map((bullet) => (
                      <ListItem key={bullet} fontSize="xs">
                        <ListIcon as={CheckIcon} color="yellow" />
                        {bullet}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>
          </Parallax>
        ))}
      </Flex>
      <Heading
        color="#464646"
        textShadow="2px 2px 2px #696969"
        textAlign="center"
        letterSpacing="2px"
        size="xl"
        py={"7"}
      >
        Kondiciona vožnja
      </Heading>

      <Center m={"3"} py={6} textAlign="center">
        <Box
          maxW={"600px"}
          w={"full"}
          boxShadow={"2xl"}
          rounded={"md"}
          p={10}
          overflow={"hidden"}
          bgColor="#2e2e2e"
          borderRadius="11vh 11vh 0vh"
          color="white"
        >
          <Box mt={-6} mx={-6} mb={6} pos={"relative"}>
            <Image src={"/steps/step-7.jpg"} layout={"fill"} borderRadius="11vh 11vh 0vh" />
          </Box>
          <Stack>
            <Text fontWeight={800} fontSize={"lg"}>
              Imate vozačku dozvolu, a ne vozite!
            </Text>

            <Box p="20px" color={"white"} rounded={"md"}>
              <List spacing={3} py="5px">
                <ListItem fontSize="xs">
                  <ListIcon as={CheckIcon} color="yellow" />
                  Oslobodite se STRAHA!
                </ListItem>
                <ListItem fontSize="xs">
                  <ListIcon as={CheckIcon} color="yellow" />
                  Naučite da parkirate u realnim situacijama
                </ListItem>
                <ListItem fontSize="xs">
                  <ListIcon as={CheckIcon} color="yellow" />
                  Obnovite vozačke veštine
                </ListItem>
                <ListItem fontSize="xs">
                  <ListIcon as={CheckIcon} color="yellow" />
                  Podignite SAMOPOUZDANJE
                </ListItem>
              </List>
            </Box>

            <Text fontWeight={800} fontSize={"lg"}>
              Naša škola će Vam u tome pomoći!
            </Text>
          </Stack>
        </Box>
      </Center>
    </>
  );
}
