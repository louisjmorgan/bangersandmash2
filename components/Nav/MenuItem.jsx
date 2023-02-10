/* eslint-disable react/prop-types */
import { Link, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router'
import NextLink from 'next/link'

function MenuItem({
 page, onChooseItem,
}) {
  // const router = useRouter()
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
