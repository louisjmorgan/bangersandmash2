import { Box, Flex, Text } from "@chakra-ui/react";
import Footer from "./Footer";
import { Nav } from "./Nav";

export default function Layout({ children, pages, data }) {
  return (
    <>
      <Nav pages={pages} />
      <Box
        backgroundImage={`
        linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0)),
        url('${data.image}')`}
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        minHeight="50rem"
        height="100vh"
        width="100%"
      >
        <Flex direction="column" justify="center" align="center" height="100%">
          <Text
            as="h1"
            // textStyle="hero"
            backdropFilter="blur(1px)"
          >
            {data.title}
          </Text>
        </Flex>
      </Box>
      <Flex direction="column" align="center" p={[5, 5, 10]} pt={0} mb={10}>
        {children}
      </Flex>
      <Footer />
    </>
  );
}
