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

export default function Bubble({ play, i, }) {
  const [randoms, setRandoms] = useState({
    yDuration: randomize(16, 4),
    xDuration: randomize(4, 1),
    xDrift: randomize(0, 50),
    horizontal: randomize(40, 40),
    scale: randomize(0.5, 0.4),
    delay: randomize(5, 5),
  });

  console.log(randoms.horizontal)
  

  const [speed, setSpeed] = useState(1);

  const [variants, setVariants] = useState();

  useEffect(() => {
    setVariants({
      rise: {
        y: `calc(-${100}vh - 200px)`,
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
      horizontal: randomize(40, 40),
      xDuration: randomize(4, 1),
      xDrift: randomize(0, 50),
      scale: randomize(0.5, 0.4),
      delay: 0,
    });
    setSpeed((prev) => prev + 0.5);
  };

  return (
    <MotionBox
      height={200}
      pointerEvents="auto"
      cursor="pointer"
      position="absolute"
      bottom={-220}
      left={`${randoms.horizontal}%`}
      width={200}
      borderRadius="50%"
      boxShadow="0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1)"
      _after={{
        content: `""`,
        background:
          "radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%)",
        boxShadow: "inset 0 20px 30px rgba(255, 255, 255, 0.3)",
        borderRadius: "50%",
        height: `180px`,
        width: `180px`,
        left: `10px`,
      }}
      // custom={i}
      variants={variants}
      willChange="transform"
      animate={"rise"}
      style={{scale: randoms.scale}}
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
