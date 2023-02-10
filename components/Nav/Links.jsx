/* eslint-disable react/prop-types */
import { Box, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import ColorMode from './ColorMode';
import MenuItem from './MenuItem';

function Links({ isOpen, setIsOpen, pages, hasScrolled  }) {
  const onChooseItem = () => {
    setIsOpen(() => false);
  };
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-around', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      > 
      <Link
      href={`/`}
      onClick={onChooseItem}
    >
      <Text
        display="block"
        // textStyle={router.asPath === page.data.title ? 'active' : ''}
      >
        Home
      </Text>
    </Link>
         {pages.map((page) => (
          <MenuItem
              key={page.data.title}
              page={page} 
              onChooseItem={onChooseItem}          
            />
        ))}
         <ColorMode hasScrolled={hasScrolled} isOpen={isOpen}/>
      </Stack>
    </Box>
  );
}



export default Links;
