import { ChakraProvider } from "@chakra-ui/react";
import { myTheme } from "../styles/theme";
import Layout from "../components/Layout";
import Fonts from "../styles/Fonts";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={myTheme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
