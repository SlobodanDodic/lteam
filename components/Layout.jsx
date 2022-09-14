import Header from "./Header";
import ProgressBar from "react-scroll-progress-bar";
import Leftbar from "./Leftbar.jsx/Leftbar";
import { Box, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "./Footer";

const increase = keyframes`
  from { height: 0vh; }
  to { height: 100vh; }
`;

export default function Layout({ children }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion ? undefined : `${increase} 3s linear`;

  return (
    <>
      <Header />
      <ParallaxProvider>
        <Box
          content='""'
          position="fixed"
          top="0%"
          right="80px"
          width="26px"
          height="100vh"
          bgColor="#2531709e"
          zIndex="-1"
          animation={animation}
        />
        <Leftbar />
        <ProgressBar bgcolor="black" />
        {children}
        <Footer />
      </ParallaxProvider>
    </>
  );
}
