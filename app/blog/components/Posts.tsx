"use client";

import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client"; // Ensure correct import of Sanity client

const POSTS_PER_LOAD = 6;

const Posts = () => {
  const [posts, setPosts] = useState<SanityDocument[]>([]);
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_LOAD);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch posts from Sanity
  const fetchPosts = async () => {
    try {
      const query = `*[_type == "post"] | order(_createdAt desc) {
        _id,
        title,
        slug,
        _createdAt,
        author,
        categories,
        description,
        "imageURL": mainImage.asset->url
      }`;
      const latestPosts = await client.fetch(query);

      console.log("Fetched Posts:", latestPosts); // Debugging
      setPosts(latestPosts);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError("Failed to fetch posts. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Sorting posts by latest
  const sortedPosts = [...posts].sort(
    (a, b) =>
      new Date(b._createdAt || 0).getTime() - new Date(a._createdAt || 0).getTime()
  );

  const [mostRecentPost, ...otherPosts] = sortedPosts;

  const loadMorePosts = () => setVisiblePosts((prev) => prev + POSTS_PER_LOAD);

  const getAuthor = (author: any) =>
    typeof author === "string" ? author : "Unknown Author";

  const getCategory = (category: any) =>
    typeof category === "string" ? category : "Uncategorized";

  const renderPost = (
    post: SanityDocument,
    isLatest: boolean = false,
    isMobile: boolean = false
  ) => (
    <Link
      href={`/blog/${post.slug.current}`}
      key={post._id}
      className={`group ${
        isLatest
          ? isMobile
            ? "md:hidden p-4 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col justify-between overflow-hidden mb-10"
            : "hidden md:flex w-full bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden mb-12"
          : "p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col justify-between overflow-hidden"
      }`}
    >
      <div className={isLatest && !isMobile ? "w-1/2 relative p-6 rounded-lg" : "relative mb-4"}>
        <Image
          className={`w-full ${
            isLatest && !isMobile ? "h-96" : "h-48"
          } object-cover rounded-lg transition-transform group-hover:scale-105`}
          src={post.imageURL}
          alt={post?.mainImage?.alt || "Post Image"}
          width={isLatest && !isMobile ? 800 : 350}
          height={isLatest && !isMobile ? 400 : 200}
          priority={isLatest}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 rounded-lg"></div>
      </div>
      <div className={isLatest && !isMobile ? "w-1/2 p-6 flex flex-col justify-center" : "flex-1"}>
        {isLatest && (
          <button className="bg-solarcoolgreen text-white px-4 py-2 rounded-full text-sm font-bold mb-3 w-fit">
            Latest
          </button>
        )}
        {!isLatest && (
          <p className="text-sm bg-solarcoolgreen text-white px-3 py-1 rounded-full mb-3 w-fit font-medium uppercase">
            {getCategory(post.categories)}
          </p>
        )}
        <h2 className={`font-medium ${isLatest ? "text-3xl" : "text-xl"} text-gray-800 group-hover:text-green-600 transition mt-2`}>
          {post.title}
        </h2>
        <p className="py-2 text-gray-500 text-sm font-medium uppercase ">
          By {getAuthor(post.author)}
        </p>
        <p className="mt-2 text-gray-600 line-clamp-3">{post.description}</p>
      </div>
    </Link>
  );

  if (loading) {
    return <div className="text-center py-10">Loading latest blogs...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div>
      {/* 🌟 Banner Section */}
      <div className="relative mb-12">
        <Image
          src="/images/blogbanner.webp"
          alt="Banner"
          className="w-full h-[600px] sm:h-[350px] md:h-[500px] lg:h-[750px] 2xl:h-[900px] object-cover object-right"
          width={1920}
          height={600}
          priority
        />
        <div className="container mx-auto px-4 sm:px-12 md:py-8 bottom-[40%] md:bottom-0 absolute inset-0 flex items-center justify-center md:justify-start text-white text-center text-5xl md:text-6xl font-bold font-['Montserrat']">
          Blogs
        </div>
      </div>

      {/* 📰 Blog Posts Section */}
      <div className="container mx-auto px-4 sm:px-12 py-8">
        {/* 🎯 Most Recent Post */}
        {mostRecentPost && (
          <>
            {renderPost(mostRecentPost, true, false)} {/* Desktop View */}
            {renderPost(mostRecentPost, true, true)}  {/* Mobile View */}
          </>
        )}

        {/* 🗃️ Other Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {otherPosts.slice(0, visiblePosts).map((post) => renderPost(post))}
        </div>

        {/* 🔄 Load More Button */}
        {visiblePosts < otherPosts.length && (
          <div className="text-center mt-10">
            <button
              onClick={loadMorePosts}
              className="bg-solarcoolgreen hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
