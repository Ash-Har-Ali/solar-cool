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
        <div className="my-4">
          {value?.asset ? (
            <Image
              src={builder.image(value).width(600).height(400).url()}
              alt={value.alt || "Image"}
              width={600}
              height={400}
              className="rounded-lg"
            />
          ) : null}
        </div>
      );
    },
  },
};

const Post = ({ post }: { post: SanityDocument }) => {
  return (
    <main className="container mx-auto prose prose-xl px-4 py-16">
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      {post?.mainImage ? (
        <Image
          src={builder.image(post.mainImage).width(300).height(300).url()}
          alt={post?.mainImage?.alt || "Main image"}
          width={300}
          height={300}
          className="rounded-lg"
        />
      ) : null}
      {post?.body ? <PortableText value={post.body} components={components} /> : null}
    </main>
  );
};

export default Post;
