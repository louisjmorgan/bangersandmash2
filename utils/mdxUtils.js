import fs from 'fs'
import path from 'path'

// POSTS_PATH is useful when you want to get the path to a specific file
export const PAGES_PATH = path.join(process.cwd(), 'content/pages')

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const pageFilePaths = fs
  .readdirSync(PAGES_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))

export const GALLERY_PATH = path.join(process.cwd(), 'content/gallery')
  
export const galleryFilePaths = fs
  .readdirSync(GALLERY_PATH)
  .filter((path) => /\.mdx?$/.test(path))

export const ARTISTS_PATH = path.join(process.cwd(), 'content/artists')
  
export const artistFilePaths = fs
  .readdirSync(ARTISTS_PATH)
  .filter((path) => /\.mdx?$/.test(path))