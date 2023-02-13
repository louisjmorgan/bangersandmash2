/* eslint-disable react/prop-types */
import { Box, chakra, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import ColorMode from './ColorMode';
import MenuItem from './MenuItem';
import { useRouter } from 'next/router'

const MagicLink = chakra(NextLink, {
  // ensure that you're forwarding all of the required props for your case
  shouldForwardProp: (prop) => ['href', 'target', 'children','as', 'onClick'].includes(prop),
})

function Links({ isOpen, setIsOpen, pages, hasScrolled  }) {
  const onChooseItem = () => {
    setIsOpen(() => false);
  };

  const router = useRouter()

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
        <MenuItem
          slug={'/'}
          key="home"
          onChooseItem={onChooseItem}
          title="Home"
          isHome
          />
        {pages.map((page) => (
          <MenuItem
            slug={`/${page.filePath.replace(/\.mdx?$/, '')}`}
            key={page.data.title}
            onChooseItem={onChooseItem}    
            title={page.data.title}      
            />
        ))}
        <ColorMode hasScrolled={hasScrolled} isOpen={isOpen}/>
      </Stack>
    </Box>
  );
}



export default Links;
