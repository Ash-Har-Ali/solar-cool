import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import banner from "../../../public/images/banner2.png";

const Posts = ({ posts = [] }: { posts: SanityDocument[] }) => {
  // Function to format dates
  const convertDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // Sort posts by creation date in descending order
  const sortedPosts = [...posts].sort(
    (a, b) =>
      new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
  );

  // Extract the most recent post and other posts
  const [mostRecentPost, ...otherPosts] = sortedPosts;

  // Function to safely retrieve the author
  const getAuthor = (author: any): string => {
    return typeof author === "string" ? author : "Unknown Author";
  };

  // Function to safely retrieve the category
  const getCategory = (category: any): string => {
    return typeof category === "string" ? category : "Uncategorized";
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="relative mb-12">
        <Image
          src={banner}
          alt="Banner"
          className="w-full h-auto object-cover"
          priority
        />
        <div className="container mx-auto px-4 sm:px-12 py-8 absolute inset-0 flex items-center text-white text-center text-4xl md:text-6xl font-bold font-['Montserrat']">
          Blogs
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-12 py-8">
        {/* Most Recent Post */}
        {mostRecentPost && (
          <Link
            href={`/blog/${mostRecentPost.slug.current}`}
            className="group mb-12 block bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden"
          >
            <div className="relative">
              <Image
                className="w-full h-72 object-cover transition-transform group-hover:scale-105"
                src={mostRecentPost.imageURL}
                alt={mostRecentPost?.mainImage?.alt || "Main Image"}
                width={800}
                height={400}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm uppercase">
                  {convertDate(mostRecentPost._createdAt)}
                </p>
                <h2 className="text-3xl font-bold">{mostRecentPost.title}</h2>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600">{mostRecentPost.description}</p>
              <p className="mt-2 text-sm text-gray-500">
                By {getAuthor(mostRecentPost.author)} • Category:{" "}
                {getCategory(mostRecentPost.categories)}
              </p>
            </div>
          </Link>
        )}

        {/* Other Posts */}
        <div className="py-10 mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-lg font-semibold mb-4">Latest Posts:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {otherPosts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:opacity-90 transition-all duration-300 ease-in-out flex flex-col justify-between overflow-hidden"
              >
                <div className="flex-1">
                  <h2 className="font-medium text-xl text-gray-800 group-hover:text-green-600 transition">
                    {post.title}
                  </h2>
                  <p className="py-2 text-gray-500 text-xs font-light uppercase">
                    {convertDate(post._createdAt)} • By{" "}
                    {getAuthor(post.author)}
                  </p>
                  <p className="text-sm text-gray-500 font-medium">
                    Category: {getCategory(post.categories)}
                  </p>
                  <p className="mt-2 text-gray-600 line-clamp-3">
                    {post.description}
                  </p>
                </div>

                {post?.mainImage && (
                  <div className="mt-4 flex-shrink-0 relative">
                    <Image
                      className="w-full h-48 object-cover rounded-lg transition-transform group-hover:scale-105"
                      src={post.imageURL}
                      alt={post?.mainImage?.alt || "Post Image"}
                      width={350}
                      height={200}
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 rounded-lg"></div>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
