import { Box, chakra, shouldForwardProp } from "@chakra-ui/react";
import { isValidMotionProp, motion, useAnimationControls } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import useSound from "use-sound";
import Bubble from "./Bubble";

function randomize(num, dev) {
  return num + (Math.random() * 2 - 1) * dev;
}



const durations = Array.from({ length: 10 }).map((_, i) => randomize(16, 4));
const sizes = Array.from({ length: 10 }).map((_, i) => randomize(150, 50));

const MotionBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

function Bubbles() {

  const [play, { sound }] = useSound("/sounds/pop.mp3");

  return (
    sound && (
      <Box
        bottom={0}
        left={0}
        height="100vh"
        width="100vw"
        position="fixed"
        right={0}
        top={0}
        zIndex={5}
        pointerEvents="none"
      >
        <MotionBox
          position="relative"
          height="100%"
          width="100%"
          // variants={variants}
          pointerEvents="none"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <Bubble
              duration={durations[i]}
              play={play}
              key={i}
              i={i}
              size={sizes[i]}
            />
          ))}
        </MotionBox>
      </Box>
    )
  );
}

export default Bubbles;
