import { Box, Flex, Text } from "@chakra-ui/react";
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
        position="relative"
        minHeight="50rem"
        height="100vh"
        width="100%"
      >
        <Flex direction="column" justify="center" align="center" height="100%">
          <Text
            textStyle="hero"
            maxWidth="20ch"
            textAlign="center"
            color={"background.light"}
            backdropFilter="blur(1px)"
          >
            {data.title}
          </Text>
        </Flex>
      </Box>
      <Flex
      mt="5"
      direction="column" 
      align="center"
      >{children}</Flex>
    </>
  );
}
