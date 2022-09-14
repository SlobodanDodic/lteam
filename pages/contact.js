import { AspectRatio, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { HiMail } from "react-icons/hi";
import { GiRotaryPhone } from "react-icons/gi";
import { RiCellphoneFill } from "react-icons/ri";

const locations = [
  {
    place: "SOMBOR",
    street: "Avrama Mrazovića 1",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.6815131329995!2d19.11445571558309!3d45.77239677910574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475cb53f7d77e3d7%3A0x751dd8f09578cbbd!2sAuto%20%C5%A1kola%20L%20Team!5e1!3m2!1sen!2srs!4v1663096978707!5m2!1sen!2srs",
  },
  {
    place: "STAPAR",
    street: "Svetosavska 27",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1405.108240315308!2d19.203921458223643!3d45.66223009477593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475cb07b3b355605%3A0x532ee9a38bcecee6!2sSvetosavska%2027%2C%20Stapar!5e1!3m2!1sen!2srs!4v1663097172374!5m2!1sen!2srs",
  },
  {
    place: "BEZDAN",
    street: "Žrtava Fašizma 19",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.634804743008!2d18.921124115585847!3d45.85281117910741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475cd2aed5795213%3A0x9c59f127dc920e85!2s%C5%BDrtava%20Fa%C5%A1izma%2019%2C%20Bezdan%2025270!5e1!3m2!1sen!2srs!4v1663097245260!5m2!1sen!2srs",
  },
];

export default function Contact() {
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
        Kontakt podaci i lokacije
      </Heading>

      <Center>
        <Flex
          color="white"
          p="10px"
          alignItems="center"
          bg="#2531709e"
          width="70vw"
          justifyContent="center"
          minWidth="300px"
          borderRadius="5px"
        >
          <HiMail />
          <Text ps="10px">autoskolalteam@gmail.com</Text>
        </Flex>
      </Center>
      <Center>
        <Flex
          color="white"
          p="10px"
          alignItems="center"
          bg="#2531709e"
          width="70vw"
          justifyContent="center"
          minWidth="300px"
          borderRadius="5px"
          m="10px"
        >
          <GiRotaryPhone />
          <Text ps="10px">025 5 101 101</Text>
        </Flex>
      </Center>
      <Center>
        <Flex
          color="white"
          p="10px"
          alignItems="center"
          bg="#2531709e"
          width="70vw"
          justifyContent="center"
          minWidth="300px"
          borderRadius="5px"
        >
          <RiCellphoneFill />
          <Text ps="10px">063 534 166</Text>
        </Flex>
      </Center>
      <Center>
        <Flex
          color="white"
          p="10px"
          alignItems="center"
          bg="#2531709e"
          width="70vw"
          justifyContent="center"
          minWidth="300px"
          borderRadius="5px"
          m="10px"
        >
          <RiCellphoneFill />
          <Text ps="10px">064 9525 317</Text>
        </Flex>
      </Center>

      <Heading
        color="#464646"
        textShadow="2px 2px 2px #696969"
        textAlign="center"
        letterSpacing="2px"
        size="lg"
        pt="3vh"
      >
        Mape naših lokacija
      </Heading>

      {locations.map((location) => (
        <div
          key={location.place}
          style={{
            margin: "0 auto",
            maxWidth: "90vw",
            padding: "1vh",
            color: "#bababa",
            textShadow: "1px 1px 3px #000000",
            textAlign: "center",
            letterSpacing: "2px",
          }}
        >
          <Heading size="md" pt={"9"} fontWeight="800">
            {location.place}
          </Heading>
          <Heading size="md" pb={"5"}>
            {location.street}
          </Heading>

          <AspectRatio ratio={16 / 9}>
            <iframe src={location.map} alt="demo" />
          </AspectRatio>
        </div>
      ))}
    </>
  );
}
