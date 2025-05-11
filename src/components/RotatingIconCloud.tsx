import React from 'react'
import { IconCloud } from './magicui/icon-cloud';
const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "androidstudio",
  ];
const RotatingIconCloud = () => {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
      );
    
  return (
    <IconCloud images={images} />
  )
}

export default RotatingIconCloud
