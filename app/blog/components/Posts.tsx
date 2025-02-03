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
      year: "numeric"
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
            className="group mb-12 flex w-full bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden"
          >
            {/* Left: Image */}
            <div className="w-1/2 relative p-6 rounded-lg">
              <Image
                className="w-full h-full object-cover transition-transform group-hover:scale-105 rounded-lg"
                src={mostRecentPost.imageURL}
                alt={mostRecentPost?.mainImage?.alt || "Main Image"}
                width={800}
                height={400}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
            </div>

            {/* Right: Content */}
            <div className="w-1/2 p-6 flex flex-col justify-center">
              <button className="bg-solarcoolgreen text-white px-4 py-2 rounded-full text-sm font-bold mb-3 w-fit">
                Latest
              </button>
              <h2 className="text-3xl font-bold text-gray-900">
                {mostRecentPost.title}
              </h2>

              {/* Author and Category */}
              <p className="text-sm text-gray-500 mt-2">
                By {getAuthor(mostRecentPost.author)} • Category:{" "}
                {getCategory(mostRecentPost.categories)}
              </p>

              <p className="text-gray-600 mt-2">{mostRecentPost.description}</p>
            </div>
          </Link>
        )}

        {/* Other Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {otherPosts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:opacity-90 transition-all duration-300 ease-in-out flex flex-col justify-between overflow-hidden"
            >
              {/* Image First */}
              {post?.mainImage && (
                <div className="relative mb-4">
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

              {/* Content Below Image */}
              <div className="flex-1">
                {/* Highlighted Category */}
                <p className="text-sm bg-solarcoolgreen text-white px-3 py-1 rounded-full mb-3 w-fit font-medium uppercase">
                  {getCategory(post.categories)}
                </p>
                {/* Post Title */}
                <h2 className="font-medium text-xl text-gray-800 group-hover:text-green-600 transition mt-2">
                  {post.title}
                </h2>

                {/* Author */}
                <p className="py-2 text-gray-500 text-xs font-light uppercase">
                  By {getAuthor(post.author)}
                </p>

                {/* Post Description */}
                <p className="mt-2 text-gray-600 line-clamp-3">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
