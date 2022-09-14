import { Flex, Circle, Box, Image, Badge, Icon } from "@chakra-ui/react";
import { GiGearStickPattern } from "react-icons/gi";
import { TbLetterA } from "react-icons/tb";
import { MdSportsMotorsports } from "react-icons/md";
import { Parallax } from "react-scroll-parallax";

const cars = [
  {
    isNew: true,
    imageURL: "/cars/audi.jpg",
    name: "Audi A1 1.6 TDI",
    categorie: "B",
    vehicle: "gear",
  },
  {
    isNew: true,
    imageURL: "/cars/cooper.jpg",
    name: "Mini Cooper 1.5 L",
    categorie: "B",
    vehicle: "gear",
  },
  {
    isNew: true,
    imageURL: "/cars/peugeot.jpg",
    name: "Peugeot 308",
    categorie: "B",
    vehicle: "gear",
  },
  {
    isNew: true,
    imageURL: "/cars/golf.jpeg",
    name: "VW Golf Mk7 1.6 TDI BM",
    categorie: "B",
    vehicle: "gear",
  },
  {
    isNew: true,
    imageURL: "/cars/sprint.jpeg",
    name: "Sprint Sport",
    categorie: "AM",
    vehicle: "motor",
  },
  {
    isNew: true,
    imageURL: "/cars/trio.png",
    name: "Trio Mustang",
    categorie: "A1",
    vehicle: "motor",
  },
  {
    isNew: true,
    imageURL: "/cars/piaggio.jpeg",
    name: "Piaggio Beverly 500 IE",
    categorie: "A2",
    vehicle: "motor",
  },
  {
    isNew: true,
    imageURL: "/cars/yamaha.jpeg",
    name: "Yamaha Diverzion 600",
    categorie: "B",
    vehicle: "motor",
  },
];

export default function Cars() {
  return (
    <Flex
      p="3vh"
      w="full"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
    >
      {cars.map((car) => (
        <Box key={car.name} m="2vh" maxW="sm" rounded="lg" shadow="md" position="relative" border="1px solid #0000001a">
          <Parallax scale={[0.85, 1, "easeIn"]}>
            {car.isNew && <Circle size="15px" position="absolute" top={2} right={2} bg="green" />}
            <Image src={car.imageURL} alt={`Picture of ${car.name}`} roundedTop="lg" />
          </Parallax>

          <Box p="4" bgColor="#f8f6f091" borderRadius="5px">
            <Box d="flex" alignItems="baseline">
              {car.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" color="white" bgColor="#008000">
                  Active
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Parallax rotateY={["90deg", "0deg"]}>
                <Box fontSize="2xl" fontWeight="semibold" as="h4" lineHeight="tight">
                  {car.name}
                </Box>
              </Parallax>

              {car.vehicle === "gear" && (
                <Icon as={GiGearStickPattern} h={9} w={9} p="3px" borderRadius="20%" color="white" bgColor="black" />
              )}
              {car.vehicle === "automatic" && (
                <Icon as={TbLetterA} h={9} w={9} p="3px" borderRadius="20%" color="green" bgColor="black" />
              )}
              {car.vehicle === "motor" && (
                <Icon as={MdSportsMotorsports} h={9} w={9} p="3px" borderRadius="20%" color="yellow" bgColor="black" />
              )}
            </Flex>

            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="md" p="1">
                {car.categorie} kategorija
              </Box>
            </Flex>
          </Box>
        </Box>
      ))}
    </Flex>
  );
}
