import { Flex, Link, Icon } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <Flex justify="center" p={5}>
      <Link
        href="https://www.instagram.com/bangersandmashtival/"
        target="_blank"
      >
        <Flex align="center" fontSize="1.125rem">
          <Icon as={FaInstagram} mr={2} />
          Follow us on Instagram
        </Flex>
      </Link>
    </Flex>
  );
}

export default Footer;
