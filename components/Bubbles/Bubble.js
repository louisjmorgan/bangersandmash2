import { Box, chakra, shouldForwardProp } from "@chakra-ui/react";
import {
  motion,
  isValidMotionProp,
  useAnimationControls,
  useMotionValue,
  useAnimation,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import useWindowSize from "../../utils/useWindowSize";

function randomize(num, dev) {
  return num + (Math.random() * 2 - 1) * dev;
}

const MotionBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Bubble({ play, duration, i, onBubble, size }) {
  const [randoms, setRandoms] = useState({
    yDuration: randomize(16, 4),
    xDuration: randomize(4, 1),
    xDrift: randomize(75, 25),
    horizontal: i * 10,
    size: randomize(150, 50),
    delay: randomize(5, 5),
  });

  const [speed, setSpeed] = useState(1);

  const [variants, setVariants] = useState();

  useEffect(() => {
    setVariants({
      rise: {
        y: `calc(-${100}vh - ${randoms.size}px)`,
        x: `${randoms.xDrift}px`,
        transition: {
          x: {
            duration: randoms.xDuration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
          y: {
            duration: randoms.yDuration,
            repeat: Infinity,
            ease: "linear",
          },
          delay: randoms.delay,
        },
      },
      reset: {
        y: 0,
        x: 0,
        transition: { duration: 0 },
      },
    });
  }, [randoms]);

  const onTap = () => {
    play();
    setRandoms({
      yDuration: randomize(16, 4) / (speed + 0.5),
      horizontal: randomize(50, 50),
      xDuration: randomize(4, 1),
      xDrift: randomize(50, 25),
      size: randomize(150, 50),
      delay: 0,
    });
    setSpeed((prev) => prev + 0.1);
  };

  return (
    <MotionBox
      height={randoms.size}
      pointerEvents="auto"
      cursor="pointer"
      position="absolute"
      bottom={-randoms.size}
      left={`${randoms.horizontal}%`}
      width={randoms.size}
      borderRadius="50%"
      boxShadow="0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1)"
      _after={{
        content: `""`,
        background:
          "radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%)",
        boxShadow: "inset 0 20px 30px rgba(255, 255, 255, 0.3)",
        borderRadius: "50%",
        height: `${randoms.size * 0.9}`,
        width: `${randoms.size * 0.9}`,
        left: `${randoms.size / 20}`,
      }}
      // custom={i}
      variants={variants}
      willChange="transform"
      animate={"rise"}
      onTapStart={onTap}
      whileTap={"reset"}
    />
  );
}

/*
 .bubble {
  -webkit-border-radius: 50%;
-moz-border-radius: 50%;
border-radius: 50%;

  -webkit-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
-moz-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);

  height: 200px;
position: absolute;
width: 200px;
transform: translateY(0);
}

.bubble:after {
  background: -moz-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%); 
  background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(255,255,255,0.5)), color-stop(70%,rgba(255,255,255,0))); 
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); 
  background: -o-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); 
  background: -ms-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); 
  background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); 
-webkit-border-radius: 50%;
-moz-border-radius: 50%;
border-radius: 50%;

  -webkit-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
-moz-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);

content: "";
  height: 180px;
left: 10px;
width: 180px;
}

*/
