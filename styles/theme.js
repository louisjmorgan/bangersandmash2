/* eslint-disable quotes */
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import {Staatliches} from '@next/font/google';
import {Nunito} from '@next/font/google';

const staatliches = Staatliches({
  weight: '400',
  subsets: ['latin'],
})

const nunito = Nunito({
  weight: '400',
  subsets: ['latin'],
})

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const fonts = {
  // fonts: {
  //   heading: `'Arial', sans-serif`,
  //   body: `'Barlow', sans-serif`,
  // },
};

const textStyles = {
  heading: {
    fontSize: "3rem",
    fontWeight: "bold",
    padding: [5, 5, 5, 10, 10],
  },
  active: {
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
  hero: {
    color: 'background.light',
    fontSize: '4.5rem',
    fontWeight: 'bold'
  },
  
};

const layerStyles = {
  // selected: {
  //   bg: 'rgba(255,255,255,0.1)',
  // },
  inverse: (props) => ({
    bg: mode('background.dark', 'background.light')(props),
  }),
  lightGradient: { backgroundImage: 'linear-gradient(248deg, #dc2f52,#c55420, #a720c5, #20dcdb)' },
  darkGradient: { backgroundImage: 'linear-gradient(248deg, #00e4a9, #aed524, #f8d861, #cd528c)' },
 
};

const colors = {
  primary: {
    100: '#230063',
    500: '#1B2430',
  },
  background: {
    light: 'white',
    dark: '#191919',
    darkElevated: '#1B2430',
  },
};

const backgroundImages = {
  gradient: {
    light: 'linear-gradient(248deg, #dc2f52,#c55420, #a720c5, #20dcdb)',
    dark: 'linear-gradient(248deg, #00e4a9, #aed524, #f8d861, #cd528c)',
  },
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode('background.light', 'background.dark')(props),
      fontFamily: `${nunito.style.fontFamily}`,
      color: mode('background.dark', 'background.light')(props),
      fontSize: "1.25rem",
      lineHeight: 2,
    },
    h1: {
      fontWeight: "bold",
      color: 'background.light',
      fontSize: ["3.5rem", "5rem", "6rem"],
      lineHeight: 1,
      // width: ["min-content", "fit-content"],
      width: "100%",
      overflowWrap: 'break-word',
      p: [3, 5, 10],
      textAlign: "center",
      fontFamily: `${staatliches.style.fontFamily}`,
    },
    h2: {
      fontWeight: "bold",
      fontSize: ["2.5rem", "3rem", "4rem"],
      textAlign: "center",
      fontFamily: `${staatliches.style.fontFamily}`,
      textTransform: 'uppercase',
      p: [3, 5, 10],
      my: 10,
    },
    h3: {
      fontWeight: "bold",
      fontSize: "3rem",
      textAlign: "center",
      fontFamily: `${staatliches.style.fontFamily}`,
      p: 5,
    },
    h4: {
      fontWeight: "bold",
      fontSize: "1.25rem",
      textAlign: "center",
      fontFamily: `${staatliches.style.fontFamily}`,
      p: 5,
    },
    p: {
      maxWidth: '80ch',
      lineHeight: 2,
      mb: 7,
      fontFamily: `${nunito.style.fontFamily}`,
      fontSize: ["1rem", "1.25rem"]
    },
    li: {
      maxWidth: '80ch',
      lineHeight: 1.25,
      mb: 7,
      fontFamily: `${nunito.style.fontFamily}`,
      fontSize: "1.25rem"
    },
    span: {
      fontFamily: `${nunito.style.fontFamily}`,
    },
    a: {
      textDecoration: 'underline',
      color: '#FF4500'
    },
    ul: {
      listStylePosition: 'inside',
    }
  }),
};
const theme = extendTheme({
  config, styles, fonts, layerStyles, textStyles, colors, backgroundImages,
});

export default theme;
