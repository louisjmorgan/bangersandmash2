import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import path from 'path'
import Layout from '../components/Layout'
import { pageFilePaths, PAGES_PATH } from '../utils/mdxUtils'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.


export default function PostPage({ source, data, pages }) {
  return (
    <>
    {/* <Head>
      <title>{data.title} | Bangers & Mashtival</title>
    </Head> */}
    <Layout pages={pages} data={data}>
      <main>
        <MDXRemote {...source}/>
      </main>
    </Layout>
    </>
  )
}


export const getStaticProps = async ({ params }) => {
  const pageFilePath = path.join(PAGES_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(pageFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  const pages = pageFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(PAGES_PATH, filePath))
    const { content, data } = matter(source)
    return {
      content,
      data,
      filePath,
    }
  })

  pages.sort((a,b) => {
    if (a.data.title === 'Music') return -1;
    if (b.data.title === 'Sign up') return -1;
    if (a.data.title === 'Info' && b.data.title === "Sign up") return -1;
    else return 0;
  })

  return {
    props: {
      source: mdxSource,
      data,
      pages,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = pageFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}
