import { SanityDocument } from "@sanity/client";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { client } from "@/sanity/lib/client";
import Post from "../components/Post";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);

  console.log("Fetched post data:", posts); // Debugging output

  if (!Array.isArray(posts)) {
    console.error("Error: Expected an array but got:", posts);
    return [];
  }

  return posts
    .filter((post) => post?.slug?.current) // Ensure slug exists
    .map((post) => ({
      slug: post.slug.current,
    }));
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
  if (!params?.slug) {
    console.error("Error: Missing slug parameter in params:", params);
    return <div>Error: Missing slug</div>;
  }

  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: { slug: params.slug },
  });

  if (!post) {
    console.error("Error: Post not found for slug:", params.slug);
    return <div>Post not found</div>;
  }

  return <Post post={post} />;
};

export default PostPage;
