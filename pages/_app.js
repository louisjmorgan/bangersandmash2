import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "../styles/bubbles.css";
import "react-image-gallery/styles/css/image-gallery.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
