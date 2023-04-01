import { pageFilePaths, PAGES_PATH } from "../utils/mdxUtils";
import Layout from "../components/Layout";
import { MDXRemote } from "next-mdx-remote";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { Box } from "@chakra-ui/react";

export default function SignupPage({ source, data, pages }) {
  return (
    <>
      {/* <Head>
      <title>{data.title} | Bangers & Mashtival</title>
    </Head> */}
      <Layout pages={pages} data={data}>
        <main>
          <MDXRemote {...source} />
          <Box maxWidth="100%">
            <iframe src={data.form} width="100%" height="720">
              Loading…
            </iframe>
          </Box>
        </main>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const pageFilePath = path.join(
    path.join(process.cwd(), `content/sign-up.mdx`)
  );
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
    },
  };
};
