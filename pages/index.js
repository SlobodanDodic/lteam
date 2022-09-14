import { Box, Center, Heading, Img, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import Header from "../components/Header";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";
import Team from "../components/Team";
import Intro from "../components/Intro";

const increase = keyframes`
  from { width: 0vw; }
  to { width: 100vw; }
`;

export default function Home() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion ? undefined : `${increase} 3s linear`;

  return (
    <>
      <Header />

      <Center
        mt="-29vh"
        _before={{
          content: '""',
          position: "fixed",
          top: "0%",
          left: "0vw",
          width: "100vw",
          height: "100vh",
          bg: "linear-gradient(180deg, #00000000 0%, #000000cc 100%), url(/moto.jpeg)",
          bgSize: "cover",
          bgRepeat: "no-repeat",
          bgPosition: "center",
          filter: "saturate(0.25)",
          zIndex: "-2",
        }}
      >
        <Box
          content='""'
          position="absolute"
          top="85vh"
          left="0vw"
          width="100vw"
          height="26px"
          bgColor="#2531709e"
          zIndex="-1"
          animation={animation}
        />

        <Box display="flex" flexDirection="column" alignItems="center" zIndex="-1">
          <Parallax speed={-15}>
            <Heading
              p="11vh 0"
              color="#000c4473"
              textShadow="1px 1px 1px #b3b3b3"
              textAlign="center"
              letterSpacing="5px"
            >
              Auto škola
            </Heading>
            <Img
              src="/logo.png"
              alt="logo"
              w="32vh"
              h="9vh"
              transform="skewX(10deg)"
              opacity="0.35"
              filter="drop-shadow(2px 3px 0px black)"
              margin="-10vh auto"
            />
          </Parallax>

          <Parallax speed={-10}>
            <Heading
              fontSize="5vh"
              p={{ base: "1vh", md: "3vh", lg: "3vh 10vh 3vh" }}
              color="#ffffff5c"
              textShadow="1px 1px 1px #000000"
              marginTop="84vh"
              lineHeight="1.4"
              width="100vw"
              letterSpacing="3px"
              fontWeight="400"
              zIndex="-1"
            >
              <span
                style={{
                  backgroundColor: "#707070",
                  color: "black",
                  borderRadius: "5px",
                  fontWeight: "500",
                  marginRight: "3px",
                }}
              >
                SO
              </span>
              <span>mbor</span>
            </Heading>
          </Parallax>
        </Box>
      </Center>

      <Center>
        <FaAngleDoubleDown style={{ color: "#ffffff4a", width: "6vh", height: "6vh", marginTop: "2vh" }} />
      </Center>

      <Intro />

      <Team />
    </>
  );
}
