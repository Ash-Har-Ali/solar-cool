import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post"] {
  _createdAt,
  title,
  slug,
  mainImage,
  "imageURL": mainImage.asset->url,
  "author": author,
  description,
  categories,
  publishedAt,
}`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  description,
  mainImage,
  "imageURL": mainImage.asset->url,
  body,
  categories,
  publishedAt,
  "author": author
}`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][] {
  "params": { "slug": slug.current }
}`;

// Get images from block content in a post by its slug
export const blockContentImagesQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    body[] {
      _type == "image" => {
        "imageUrl": asset->url,
        alt
      }
    }
  }
`;





// Fetch all products
export const productsQuery = groq`
  *[_type == "products"] {
    _id,
    productName,
    "slug": slug.current,
    imagesGallery[] {
      asset-> {
        _id,
        url
      },
      alt
    },
    Price,
    bldc,
    category
  }
`;

// Fetch a single product by its slug
export const productQuery = groq`
  *[_type == "products" && slug.current == $slug][0] {
    _id,
    productName,
    "slug": slug.current,
    imagesGallery[] {
      asset-> {
        _id,
        url
      },
      alt
    },
    Price,
    bldc,
    category
  }
`;

// Fetch all product slugs
export const productPathsQuery = groq`
  *[_type == "products" && defined(slug.current)][] {
    "params": { "slug": slug.current }
  }
`;
