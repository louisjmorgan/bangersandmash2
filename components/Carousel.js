/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Flex, Image } from "@chakra-ui/react";

import useEmblaCarousel from "embla-carousel-react";
import { useRef, useEffect, useState, useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function Carousel({ images }) {
  const [emblaRef, embla] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [Autoplay({ delay: 5000 })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  return (
    <Box
      position="absolute"
      height="100%"
      overflow="hidden"
      color="white"
      ref={emblaRef}
      cursor="pointer"
    >
      <Flex height="100%" align="start" overflow="hidden">
        {images.map((img) => (
          <Box key={img} height="100%" width="100vw" overflow="hidden" p={0}>
            <Box
              position="absolute"
              height="100%"
              width="100%"
              background="linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.0) 7%)"
            />
            <Image
              alt="background"
              width="100%"
              height="100%"
              zIndex={-1}
              src={img}
              objectFit="cover"
              objectPosition="center"
              overflow="hidden"
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
