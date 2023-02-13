import { Button, DarkMode, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { withTheme } from '@emotion/react';

function ColorMode({hasScrolled, isOpen}) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <DarkMode>
    <Button
      onClick={toggleColorMode} 
      backgroundColor={hasScrolled || isOpen ? colorMode === "light" ? "whiteAlpha" : 'blackAlpha' : 'whiteAlpha'}
      color={hasScrolled || isOpen ? colorMode === "light" ? "background.dark" : 'background.light' : 'background.light'}
      m={0}
    >
      {colorMode === 'light' ? <MoonIcon m={0} color="inherit"/> : <SunIcon m={0} color="inherit" />}
    </Button>
    </DarkMode>
  );
}

export default ColorMode;
