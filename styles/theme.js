/* eslint-disable quotes */
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

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
  }
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
      fontFamily: `'Barlow', sans-serif`,
      color: mode('background.dark', 'background.light')(props),
    },
    h1: {
      fontWeight: "bold",
      fontSize: "2rem",
      textAlign: "center",
      p: 10,
    },
    h2: {
      fontWeight: "bold",
      fontSize: "1.5rem",
      textAlign: "center",
      p: 5,
    },
    p: {
      maxWidth: '70ch',
    }
  }),
};
const theme = extendTheme({
  config, styles, fonts, layerStyles, textStyles, colors, backgroundImages,
});

export default theme;
