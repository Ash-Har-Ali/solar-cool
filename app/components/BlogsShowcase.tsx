import { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { postsQuery } from "../../sanity/lib/queries";

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
          )
          .slice(0, 3);
        setBlogs(sortedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mb-10 mt-10">
      <div className="text-[#000000] text-[34px] font-semibold font-['Montserrat'] sm:text-[28px] md:text-[34px] lg:text-[38px] text-center mt-12">
        Blogs
      </div>
      <p className="text-center mb-8 text-sm sm:text-base md:text-lg">
        Informational Articles on Solar air conditioners
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-9 items-center justify-center py-8 px-6">
        {blogs.map(blog =>
          <div
            key={blog.slug.current}
            className="border-white rounded-2xl shadow-lg bg-[#f4f4f4] relative flex flex-col w-full sm:w-80 items-start justify-center mx-auto"
          >
            <h3 className="text-lg font-semibold p-4">
              {blog.title}
            </h3>
            <p className="text-gray-600 mb-4 px-4 text-sm sm:text-base line-clamp-2">
              {blog.description.slice(0, 100)}...
            </p>
            <div className="px-3 w-full flex justify-start">
              <a
                href={`/blog/${blog.slug.current}`}
                className="px-3 py-1 bg-[#ededed] rounded-full text-black font-normal border-2 text-sm mb-3 w-max"
              >
                Read More
              </a>
            </div>
            <Image
              src={blog.imageURL}
              alt={blog.title}
              width={350}
              height={400}
              className="w-full h-48 object-cover rounded-b-2xl mt-4"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsShowcase;