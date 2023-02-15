import { Accordion, Box, Flex } from "@chakra-ui/react";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import path from "path";
import ArtistCard from "../components/Artist";
import Layout from "../components/Layout";
import {
  artistFilePaths,
  ARTISTS_PATH,
  pageFilePaths,
  PAGES_PATH,
} from "../utils/mdxUtils";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(import("react-player"), { ssr: false });

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.

export default function MusicPage({ source, data, artists, pages }) {
  console.log(artists);
  return (
    <>
      {/* <Head>
      <title>{data.title} | Bangers & Mashtival</title>
    </Head> */}
      <Layout pages={pages} data={data}>
        <main>
          <MDXRemote {...source} />
          <Flex width="100%" justify="center">
          <Box
            className="player-wrapper"
            height="30rem"
            width="100%"
            maxWidth="40rem"
          >
            <ReactPlayer width="100%" height="100%" url={data.url} />
          </Box>
          </Flex>
          <h2>Artists</h2>
          <Accordion allowMultiple allowToggle>
            {artists.map((artist) => (
              <ArtistCard
                key={artist.data.name}
                url={artist.data.url}
                source={artist.source}
                image={artist.data.image}
                name={artist.data.name}
              />
            ))}
          </Accordion>
        </main>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const pageFilePath = path.join(path.join(process.cwd(), `content/music.mdx`));
  const source = fs.readFileSync(pageFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  const unresolvedArtists = artistFilePaths.map(async (filePath) => {
    console.log(filePath);
    const source = fs.readFileSync(path.join(ARTISTS_PATH, filePath));
    const { content, data } = matter(source);
    console.log(content, data);
    const mdxSource = await serialize(content, {
      // Optionally pass remark/rehype plugins
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
      scope: data,
    });
    return {
      data,
      source: mdxSource,
    };
  });

  const artists = await Promise.all(unresolvedArtists);

  const pages = pageFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(PAGES_PATH, filePath));
    const { content, data } = matter(source);
    return {
      content,
      data,
      filePath,
    };
  });

  pages.sort((a, b) => {
    if (b.data.title === "Sign up") return -1;
    if (a.data.title === "Info" && b.data.title === "Sign up") return -1;
    else return 0;
  });

  return {
    props: {
      source: mdxSource,
      data,
      pages,
      artists,
    },
  };
};
