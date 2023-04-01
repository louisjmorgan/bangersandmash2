/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import {
  galleryFilePaths,
  GALLERY_PATH,
  pageFilePaths,
  PAGES_PATH,
} from "../utils/mdxUtils";
import { Nav } from "../components/Nav";
import ImageGallery from "react-image-gallery";

function Gallery({ pages, images }) {
  const [index, setIndex] = useState(-1);
  const [photos, setPhotos] = useState(
    images.map((img) => ({
      ...img.data,
      original: img.data.src,
      thumbnail: img.data.src + "?nf_resize=fit&w=300&h=400",
      originalAlt: img.data.alt,
      title: img.data.alt,
      thumbnailAlt: img.data.alt,
      description: img.data.alt,
    }))
  );

  console.log(images);

  console.log(photos);

  return (
    <>
      <Nav pages={pages} />
      <Stack
        p={[5, 5, "5rem", "10rem"]}
        pt={["5rem", "5rem", "10rem", "10rem"]}
        minHeight="500px"
      >
        <ImageGallery
          items={photos}
          // <PhotoAlbum
          //   photos={photos}
          //   layout="masonry"
          //   columns={(containerWidth) => {
          //     if (containerWidth < 800) return 2;
          //     return 3;
          //   }}
          //   targetRowHeight={400}
          //   renderPhoto={useRenderPhoto}
          //   onClick={setIndex}
          // />
          // <Lightbox
          //   slides={photos}
          //   open={index >= 0}
          //   index={index}
          //   close={() => setIndex(-1)}
          //   plugins={[Thumbnails, Captions]}
          // />
        />
      </Stack>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const images = galleryFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(GALLERY_PATH, filePath));
    const { data } = matter(source);
    return {
      data,
      filePath,
    };
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
    if (a.data.title === "Music") return -1;
    if (b.data.title === "Sign up") return -1;
    if (a.data.title === "Info" && b.data.title === "Sign up") return -1;
    else return 0;
  });

  return {
    props: {
      pages,
      images,
    },
  };
};

export default Gallery;
