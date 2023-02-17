import { Button, DarkMode, useColorMode, Icon } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { MdBubbleChart } from 'react-icons/md';

function BubbleMode({hasScrolled, isOpen, setBubbles, isBubbles}) {
  const { colorMode } = useColorMode();
  const router = useRouter()
  const onClick = () => {
    setBubbles(prev => !prev)
  }
  return (
    <DarkMode>
    <Button
      onClick={onClick}
      backgroundColor={
        isBubbles ? 'green.500' :
        hasScrolled || isOpen ? colorMode === "light" ? "whiteAlpha" : 'blackAlpha' : 'whiteAlpha'}
      color={hasScrolled || isOpen || router.asPath === '/gallery' ? colorMode === "light" ? "background.dark" : 'background.light' : 'background.light'}
      m={0}
    >
      <Icon as={MdBubbleChart} m={0} color="inherit" size="lg"/>
    </Button>
    </DarkMode>
  );
}

export default BubbleMode;
