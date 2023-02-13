import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Link from 'next/link'
import path from 'path'
import Layout from '../components/Layout'
import { pageFilePaths, PAGES_PATH } from '../utils/mdxUtils'

export default function Index({pages, data, source}) {
  return (
    <Layout pages={pages} data={data}>
        <main>
        <MDXRemote {...source} />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const source = fs.readFileSync(path.join(process.cwd(), 'content/home.mdx'))
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

  return { props: { pages, data, source: mdxSource } }
}





