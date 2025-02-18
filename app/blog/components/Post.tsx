"use client";

import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Head from "next/head";

const builder = imageUrlBuilder(client);

// PortableText components for rendering custom types like images
const components = {
  types: {
    image: ({ value }: { value: any }) => {
      return (
        <div className="my-8">
          {value?.asset ? (
            <Image
              src={builder.image(value).width(900).height(600).url() || ''}
              alt={value.alt || "Image"}
              width={900}
              height={600}
              className="rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              loading="lazy"
            />
          ) : null}
        </div>
      );
    }
  }
};

interface PostProps {
  post: SanityDocument & {
    title?: string;
    description?: string;
    mainImage?: {
      asset?: object;
      alt?: string;
    };
    body?: any;
    author?: string;
    categories?: string[] | any; // Categories can be an array or object (hence `string[] | any`)
    publishedAt?: string;
    slug?: {
      current?: string;
    };
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  if (!post) return <p className="text-center text-lg text-gray-600">Loading...</p>;

  const convertDate = (date: string): string => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  };

  const pageTitle = post.title || "Untitled Post";
  const pageDescription = post.description || "Read this amazing post.";
  const pageImage = post.mainImage
    ? builder.image(post.mainImage).width(1200).height(630).url()
    : "/default-og-image.jpg";

  const author = post.author || "Unknown Author";
  
  // Fix for categories handling
  const categories = Array.isArray(post.categories) 
    ? post.categories.map((cat) => cat.title).join(", ") 
    : "Uncategorized"; 

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`${categories}, blog, ${author}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content={author} />
        <meta property="article:published_time" content={post.publishedAt || new Date().toISOString()} />
        <meta property="article:section" content={categories} />
        <link rel="canonical" href={`https://yourwebsite.com/blog/${post.slug?.current || ""}`} />
      </Head>

      <main className="container mx-auto prose prose-xl px-6 py-16 bg-white rounded-xl shadow-lg mb-12">
        {/* Main Image Section */}
        {post?.mainImage && (
          <div className="mb-12 justify-items-center">
            <Image
              src={builder.image(post.mainImage).width(900).height(600).url() || ''}
              alt={post?.mainImage?.alt || "Main image"}
              width={900}
              height={600}
              className="rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              priority
            />
          </div>
        )}

        {/* Title Section */}
        <header className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-wide leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600">{post.description}</p>
        </header>

        {/* Meta Data Section */}
        <div className="flex justify-center space-x-6 text-sm text-gray-700 mb-12">
          <p className="font-medium">By {author}</p>
          <p className="font-light">Category: {categories}</p>
          <p className="font-light">
            Published: {convertDate(post.publishedAt || new Date().toISOString())}
          </p>
        </div>

        {/* Body Content Section */}
        {Array.isArray(post.body) && post.body.length > 0 ? (
          <div className="text-lg text-gray-700 leading-relaxed space-y-8">
            <PortableText value={post.body} components={components} />
          </div>
        ) : (
          <p className="text-center text-lg text-gray-500">No content available.</p>
        )}

        {/* Footer Section */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>Thank you for reading this post.</p>
        </footer>
      </main>
    </>
  );
};

export default Post;
