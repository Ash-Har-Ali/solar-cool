import { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "../../sanity/lib/client"; // Import your Sanity client
import { postsQuery } from "../../sanity/lib/queries"; // Import your query

// Define a type for blog posts
interface BlogPost {
  _createdAt: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  imageURL: string;
  author: string;
  description: string;
  categories: string[];
  publishedAt: string;
}

const BlogsShowcase = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]); // Explicitly define state type

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data: BlogPost[] = await client.fetch(postsQuery);
        const sortedBlogs = data
          .sort(
            (a, b) =>
              new Date(b.publishedAt).getTime() -
              new Date(a.publishedAt).getTime()
          ) // Explicit types
          .slice(0, 3);
        setBlogs(sortedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="text-[#000000] text-[34px] font-semibold font-['Montserrat'] sm:text-[28px] md:text-[34px] lg:text-[38px] text-center">
        Blogs
      </div>
      <p className="text-center mb-8">
        Informational Articles on Solar air conditioners
      </p>

      <div className="container mx-auto px-8 sm:px-16 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-around ">
        {blogs.map((blog) => (
          <div
            key={blog.slug.current}
            className=" border-white rounded-2xl shadow-lg bg-[#f4f4f4] relative flex flex-col w-80  items-start justify-center"
          >
            <h3 className="text-lg font-semibold  p-4">{blog.title}</h3>
            <p className="text-gray-600 mb-4 px-4 ">
              {blog.description.slice(0, 100)}...
            </p>
            <div className="px-3 ">
            <a
              href={`/blog/${blog.slug.current}`}
              className=" px-3 py-1 bg-[#ededed] rounded-full text-black font-normal border-2  text-sm mb-3 w-max"
            >
              Read More
            </a></div>
            <Image
              src={blog.imageURL}
              alt={blog.title}
              width={350}
              height={400}
              className="w- h-48 object-cover rounded-b-2xl mt-4 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsShowcase;
