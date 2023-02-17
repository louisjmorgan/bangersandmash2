import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import { Nav } from "./Nav";

export default function Layout({ children, pages, data }) {
  return (
    <>
    
      <Nav pages={pages} />
      <Box
        m={0}
        position="relative"
        display="block"
        minHeight="50rem"
        height="100vh"
        width="100vw"
        overflow="hidden"
      >
        <Carousel images={data.images} />

        <Flex
          direction="column"
          justify="center"
          align="center"
          height="100%"
          pointerEvents="none"
        >
          <Text
            as="h1"
            // textStyle="hero"
            backdropFilter="blur(1px)"
          >
            {data.title}
          </Text>
        </Flex>

      </Box>
      <Flex direction="column" align="center" p={[10]} pt={0} mb={10} width="100%">
        {children}
      </Flex>
      <Footer />
    </>
  );
}
