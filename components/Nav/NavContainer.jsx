/* eslint-disable no-nested-ternary */
import { Box, Flex, useColorMode } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ColorMode from './ColorMode';
import Links from './Links';
// import Logo from './Logo';
import MenuButton from './MenuButton';

function NavContainer({ pages }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { colorMode } = useColorMode();
  const [hasScrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if ((window.scrollY > 0)) setScrolled(true);
    else if ((window.scrollY === 0)) setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Box
      as="nav"
     
      wrap="wrap"
      w="100%"
      maxWidth="100vw"
      px={[5, 10]}
      py={3}
      pb={4}
      height="auto"
      position="fixed"
      transition="background-color 0.2s ease-out"
      backgroundColor={hasScrolled
        ? colorMode === 'light' ? 'background.light' : 'background.dark'
        : isOpen ? colorMode === 'light' ? 'background.light' : 'background.dark' : 'transparent'}
      zIndex={5}
      boxShadow={hasScrolled && `0 1px 3px ${colorMode === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.2)'}`}
      color={hasScrolled || isOpen
        ? colorMode === 'light' ? 'background.dark' : 'background.light'
        : 'background.light'}
    >
      {/* <Logo /> */}
      <MenuButton isOpen={isOpen} toggle={toggle} />
      <Box
        display={{ base: isOpen ? 'block' : 'none', lg: 'block' }}
        flexBasis="100%"
        maxWidth="50rem"
      >
        <Links pages={pages} isOpen={isOpen} setIsOpen={setIsOpen} hasScrolled={hasScrolled}/>
      </Box>
    </Box>
  );
}

export default NavContainer;
