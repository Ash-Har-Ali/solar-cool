"use client";

import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const builder = imageUrlBuilder(client);

// PortableText components for rendering custom types like images
const components = {
  types: {
    image: ({ value }: { value: any }) => {
      return (
        <div className="my-8">
          {value?.asset ? (
            <Image
              src={builder.image(value).width(900).height(600).url()}
              alt={value.alt || "Image"}
              width={900}
              height={600}
              className="rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            />
          ) : null}
        </div>
      );
    }
  }
};

const Post = ({ post }: { post: SanityDocument }) => {
  const convertDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  };

  return (
    <main className="container mx-auto prose prose-xl px-6 py-16 bg-white rounded-xl shadow-lg">
      {/* Main Image Section (First) */}
      {post?.mainImage ? (
        <div className="mb-12">
          <Image
            src={builder.image(post.mainImage).width(900).height(600).url()}
            alt={post?.mainImage?.alt || "Main image"}
            width={900}
            height={600}
            className="rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
          />
        </div>
      ) : null}

      {/* Title Section (Second) */}
      <header className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-wide leading-tight">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-gray-600">{post.description}</p>
      </header>

      {/* Meta Data (Author, Category, Date) */}
      <div className="flex justify-center space-x-6 text-sm text-black mb-12">
        <p className="font-medium">{post.authorName}</p>
        <p className="font-light">{post.category}</p>
      </div>

      {/* Body Content Section (Rest of the Post) */}
      {post?.body ? (
        <div className="text-lg text-gray-700 leading-relaxed space-y-8">
          <PortableText value={post.body} components={components} />
        </div>
      ) : null}

      {/* Footer Section */}
      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>Thank you for reading this post.</p>
      </footer>
    </main>
  );
};

export default Post;
