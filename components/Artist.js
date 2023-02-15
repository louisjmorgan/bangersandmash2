import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  chakra,
  Flex,
  Image,
} from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(import("react-player"), { ssr: false });

const Player = chakra(ReactPlayer, {
  // ensure that you're forwarding all of the required props for your case
  shouldForwardProp: (prop) => ["url"].includes(prop),
});

export default function ArtistCard({ name, image, source, url }) {
  return (
    <AccordionItem>
      <AccordionButton as={Flex} align="center" justify="center">
        <Image src={image} height={["5rem", "10rem"]} borderRadius="50%" />
        <h3>{name}</h3>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel p={[3, 5, 10]} as={Flex} direction="column" align="center">
        <MDXRemote {...source} />
        <Box className="player-wrapper" height="30rem" width="100%" maxWidth="40rem">
          <ReactPlayer
            width="100%"
            height="100%"
            url={url}
            config={{
              soundcloud: {
                options: { show_artwork: false },
              },
            }}
          />
        </Box>
      </AccordionPanel>
    </AccordionItem>
  );
}

// const Artists = ({ data, source }) => {
//   const artists = Object.entries(data).map((artist) => (
//     <ArtistCard
//       key={artist.name}
//       name={artist.name}
//       source={source}
//       url={artist.description}
//     />
//   ));
//   return <section>{artists}</section>;
// };
