/* eslint-disable react/prop-types */
import { Box, chakra, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const MagicLink = chakra(NextLink, {
  // ensure that you're forwarding all of the required props for your case
  shouldForwardProp: (prop) => ['href', 'target', 'children','as', 'onClick'].includes(prop),
})

function MenuItem({
 title, onChooseItem, slug, isDynamic = true,
}) {
  const router = useRouter()
  return (
    <MagicLink
      as={isDynamic ? slug : null}
      href={isDynamic ? `/[slug]` : slug}
      onClick={onChooseItem}
      color="inherit"
      textDecoration="none"
    >
      <Text
        display="block"
        as="span"
        width="max-content"
        // textStyle="active"
        fontSize={['1rem', '1rem', '1rem', '1rem', '1.25rem']}
        textStyle={router.asPath === slug ? 'active' : ''}
      >
        {title}
      </Text>
    </MagicLink>
  );
}

export default MenuItem;
