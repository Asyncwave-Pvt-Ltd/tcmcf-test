"use client";

import Image, { type ImageLoader, type ImageProps } from "next/image";

const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

// "/9.png" → tcmcf/9 on Cloudinary (uploaded by scripts/upload-cloudinary.mjs).
// Cloudinary resizes per srcset width, so the multi-MB originals never hit Next's optimizer.
const loader: ImageLoader = ({ src, width, quality }) =>
  `https://res.cloudinary.com/${CLOUD}/image/upload/c_limit,w_${width},q_${quality ?? "auto"},f_auto/${src.replace(/^\/|\.\w+$/g, "")}`;

/** next/image for the large photos in /public; logos and Sanity images keep plain <Image>. */
export function CldImage({ alt, ...props }: ImageProps) {
  return <Image loader={loader} alt={alt} {...props} />;
}
