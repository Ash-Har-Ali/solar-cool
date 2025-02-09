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
          .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()) // Explicit types
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
      <p className="text-center mb-8">Informational Articles on Solar air conditioners</p>

      <div className="container mx-auto px-8 sm:px-16 py-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {blogs.map((blog) => (
          <div key={blog.slug.current} className="p-3 border-white rounded-lg shadow-md bg-[#f4f4f4] relative flex flex-col">
            <Image
              src={blog.imageURL}
              alt={blog.title}
              width={350}
              height={400}
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <div className="flex-1 mb-10">
              <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.description.slice(0, 100)}...</p>
            </div>
            <a
              href={`/blog/${blog.slug.current}`}
              className="absolute bottom-3 left-3 bg-solarcoolgreen px-3 py-1 rounded-full text-white text-sm mb-3"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsShowcase;
