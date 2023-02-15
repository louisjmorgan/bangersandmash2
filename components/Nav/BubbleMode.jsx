import { Button, DarkMode, useColorMode, Icon } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { MdBubbleChart } from 'react-icons/md';

function ColorMode({hasScrolled, isOpen, bubble}) {
  const { colorMode } = useColorMode();
  const router = useRouter()
  return (
    <DarkMode>
    <Button
      onClick={bubble.onToggle}
      backgroundColor={hasScrolled || isOpen ? colorMode === "light" ? "whiteAlpha" : 'blackAlpha' : 'whiteAlpha'}
      color={hasScrolled || isOpen || router.asPath === '/gallery' ? colorMode === "light" ? "background.dark" : 'background.light' : 'background.light'}
      m={0}
    >
      <Icon as={MdBubbleChart} m={0} color="inherit" size="lg"/>
    </Button>
    </DarkMode>
  );
}

export default ColorMode;
