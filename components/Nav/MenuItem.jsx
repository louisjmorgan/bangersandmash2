/* eslint-disable react/prop-types */
import { Text } from '@chakra-ui/react';
import NextLink from 'next/link'

function MenuItem({
 page, onChooseItem,
}) {
  return (
    <NextLink
      as={`/${page.filePath.replace(/\.mdx?$/, '')}`}
      href={`/[slug]`}
      onClick={onChooseItem}
    >
      <Text
        display="block"
        // textStyle={router.asPath === page.data.title ? 'active' : ''}
      >
        {page.data.title}
      </Text>
    </NextLink>
  );
}

export default MenuItem;
