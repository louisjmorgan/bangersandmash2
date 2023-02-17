/* eslint-disable react/prop-types */
import { Box, chakra, Flex, IconButton, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import ColorMode from './ColorMode';
import MenuItem from './MenuItem';
import { useRouter } from 'next/router'
import { RiBubbleChartFill } from 'react-icons/ri';
import BubbleMode from './BubbleMode';

const MagicLink = chakra(NextLink, {
  // ensure that you're forwarding all of the required props for your case
  shouldForwardProp: (prop) => ['href', 'target', 'children','as', 'onClick'].includes(prop),
})

function Links({ isOpen, setIsOpen, pages, hasScrolled, setBubbles, isBubbles }) {
  const onChooseItem = () => {
    setIsOpen(() => false);
  };

  const router = useRouter()

  return (
    
      <Flex
        spacing={8}
        align="center"
        justify={['center', 'space-around', 'space-between', 'space-around']}
        direction={['column', 'column', 'row', 'row']}
        pt={[4, 4, 0, 0]}
        width="100%"
      >         
        <MenuItem
          slug={'/'}
          key="home"
          onChooseItem={onChooseItem}
          title="Home"
          isDynamic={false}
          />
        <MenuItem
          slug={'/gallery'}
          key="gallery"
          onChooseItem={onChooseItem}
          title="Gallery"
          isDynamic={false}
          />
        <MenuItem
          slug={'/music'}
          key="music"
          onChooseItem={onChooseItem}
          title="Music"
          isDynamic={false}
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
        <BubbleMode setBubbles={setBubbles} isBubbles={isBubbles} hasScrolled={hasScrolled} isOpen={isOpen}  />
      </Flex>
  );
}



export default Links;
