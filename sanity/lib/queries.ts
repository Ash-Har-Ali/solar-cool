import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post"] {
  _createdAt,
  title,
  slug,
  mainImage,
  "imageURL": mainImage.asset->url,
  "author": author,
}`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  title, 
  description, 
  mainImage,
  "imageURL": mainImage.asset->url,
  body
}`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][] {
  "params": { "slug": slug.current }
}`;





// Get all galleries
export const galleryQuery = groq`
  *[_type == "gallery"] {
    _id,
    title,
    mainImage {
      asset -> {
        url
      },
      alt
    }
  }
`;

// Get a gallery by its slug
export const galleryBySlugQuery = groq`
  *[_type == "gallery" && slug.current == $slug][0] {
    _id,
    title,
    mainImage {
      asset -> {
        url
      },
      alt
    }
  }
`;

// Get images from block content in a post by its slug
export const blockContentImagesQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    body[]{
      _type == "image" => {
        "imageUrl": asset->url,
        alt
      }
    }
  }
`;





// Fetch All Product Categories
export const productCategoriesQuery = groq`
  *[_type == "product-category"] {
    _id,
    category,
    "slug": slug.current,
    mainimage {
      asset-> {
        _id,
        url
      },
      alt
    }
  }
`;

// Fetch a Single Product Category by slug
export const productCategoryQuery = groq`
  *[_type == "product-category" && slug.current == $slug][0] {
    _id,
    category,
    "slug": slug.current,
    mainimage {
      asset-> {
        _id,
        url
      },
      alt
    }
  }
`;

// Fetch All Slugs for Product Categories
export const productCategorySlugsQuery = groq`
  *[_type == "product-category" && defined(slug.current)] {
    "slug": slug.current
  }
`;
