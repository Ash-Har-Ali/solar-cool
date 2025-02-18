import { SanityDocument } from "@sanity/client";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { client } from "@/sanity/lib/client";
import Post from "../components/Post";

export const revalidate = 60;

// Function to generate static paths for the posts
export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);

  // Filter posts to only return those with a valid 'slug.current'
  return posts
    .filter((post: { slug: { current: string } }) => post.slug?.current) // Ensure there is a valid slug
    .map((post: { slug: { current: string } }) => ({
      slug: post.slug.current,
    }));
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
  try {
    // Fetch post data using the provided slug
    const post = await sanityFetch<SanityDocument>({
      query: postQuery,
      params: { slug: params.slug },
    });

    // If no post is found, return a 'Post Not Found' message
    if (!post) {
      return <div>Post not found</div>;
    }

    return <Post post={post} />;
  } catch (error) {
    console.error("Error fetching post:", error);
    return <div>Failed to load post data. Please try again later.</div>; // Handle errors gracefully
  }
};

export default PostPage;
