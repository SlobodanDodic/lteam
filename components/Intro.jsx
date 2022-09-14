import { Box, Flex, Heading, List, ListIcon, ListItem, SimpleGrid, Text } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Parallax } from "react-scroll-parallax";

export default function Intro() {
  return (
    <Flex justifyContent="center" w="100vw">
      <SimpleGrid maxWidth="1200px" columns={{ sm: 1, md: 3 }} color="#efefef" letterSpacing="1px" padding="12vh 0vh">
        <Parallax speed={10}>
          <Box
            bg="#363636e0"
            height="fit-content"
            margin="1vh"
            padding="15px"
            borderRadius="0 20px"
            boxShadow="3px 3px 5px #0f0f0f"
          >
            <Heading size="md" pb="15px" color="royalblue">
              KO JE L-TEAM?
            </Heading>
            <Text fontSize="sm">
              Iako firma osnovana 2020-e godine, zajedno imamo preko 20 godina iskustva u sektoru saobraćaja i želimo to
              iskustvo da iskoristimo u svrhu prenošenja znanja budućim vozačima!
            </Text>
          </Box>
        </Parallax>

        <Parallax speed={20}>
          <Box
            bg="#363636e0"
            height="fit-content"
            margin="1vh"
            padding="15px"
            borderRadius="0 20px"
            boxShadow="3px 3px 5px #0f0f0f"
          >
            <Heading size="md" pb="15px" color="yellow">
              MISIJA
            </Heading>
            <Text fontSize="sm">
              Jednostavnom idejom spajanja iskustva i entuzijazma naša misija je ne samo obuka, već i edukacija i u tome
              ćemo zajedno uspeti, jer:
            </Text>
            <List spacing={3} pt="10px">
              <ListItem fontSize="xs">
                <ListIcon as={CheckIcon} color="royalblue" />
                imamo nova vozila za praktičnu obuku,
              </ListItem>
              <ListItem fontSize="xs">
                <ListIcon as={CheckIcon} color="royalblue" />
                opremljenu prostoriju za teoretsku obuku,
              </ListItem>
              <ListItem fontSize="xs">
                <ListIcon as={CheckIcon} color="royalblue" />
                naprednu tehnologiju,
              </ListItem>
              <ListItem fontSize="xs">
                <ListIcon as={CheckIcon} color="royalblue" />
                uvek aktuelna saznanja,
              </ListItem>
              <ListItem fontSize="xs">
                <ListIcon as={CheckIcon} color="royalblue" />
                veliko iskustvo
              </ListItem>
              <ListItem fontSize="xs">
                <ListIcon as={CheckIcon} color="royalblue" />i iskrenu želju da naše puteve učinimo sigurnijim.
              </ListItem>
            </List>
          </Box>
        </Parallax>

        <Parallax speed={30}>
          <Box
            bg="#363636e0"
            height="fit-content"
            margin="1vh"
            padding="15px"
            borderRadius="0 20px"
            boxShadow="3px 3px 5px #0f0f0f"
          >
            <Heading size="md" pb="15px" color="green">
              CILJ
            </Heading>
            <Text fontSize="sm">
              Primarni cilj auto škole L-Team je profesionalna obuka i to da usluga koju auto škola pruža bude na jednom
              višem nivou! Sama obuka ne čini dovoljnu osnovu bez kvalitetne edukacije budućih vozača i to sa ciljem
              stvaranja savesnih i odgovornih budućih učesnika u saobraćaju čime i sami aktivno učestvujemo u smanjenju
              svih negativnih posledica i potencijalnih opasnosti u saobraćaju. U prijatnom ambijentu naše učionice sa
              savremenim sredstvima i opremom naši visoko obučeni predavači će vam preneti svo nepohodno znanje i
              iskustvo, ne samo za polaganje ispita, već da biste i u vremenu nakon polaganja ispita bili bezbedan
              vozač.
            </Text>
          </Box>
        </Parallax>
      </SimpleGrid>
    </Flex>
  );
}
