import Head from "next/head";
import { Heading } from "@chakra-ui/react";
import Cars from "../components/Cars";
import Classroom from "../components/Classroom";
import Team from "../components/Team";

export default function Gallery() {
  return (
    <>
      <Head>
        <title>L Team | Galerija</title>
      </Head>

      <Heading size="lg" p="2vh 5vh" textAlign={{ base: "start", sm: "center" }}>
        Galerija vozila
      </Heading>
      <Cars />

      <Heading size="lg" p="2vh 5vh" textAlign={{ base: "start", sm: "center" }}>
        Galerija firme
      </Heading>
      <Classroom />
    </>
  );
}
