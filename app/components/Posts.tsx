import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import banner from "../../public/images/banner2.png";

const Posts = ({ posts = [] }: { posts: SanityDocument[] }) => {
  const convertDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  };

  // Sort posts by _createdAt date in descending order (newest first)
  const sortedPosts = [...posts].sort((a, b) => new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime());

  return (
    <div>

      {/* Banner Section */}
      <div className="relative">
        <Image src={banner} alt="Banner" className="w-full object-cover h-[400px] md:h-[500px]" />
        <div className="absolute left-8 md:left-16 top-[30%] md:top-[40%] text-white text-4xl md:text-6xl font-bold font-['Montserrat'] shadow-lg">
          Blog
        </div>
      </div>

      <div className="py-10 mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-600 text-lg font-semibold mb-4">Latest Posts:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sortedPosts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:opacity-90 transition-all duration-300 ease-in-out flex flex-col justify-between overflow-hidden"
            >
              <div className="flex-1">
                <h2 className="font-medium text-xl text-gray-800 group-hover:text-green-600 transition">{post.title}</h2>
                <p className="py-2 text-gray-500 text-xs font-light uppercase">{convertDate(post._createdAt)} • {post.authorName}</p>
              </div>

              {post?.mainImage && (
                <div className="mt-4 flex-shrink-0 relative">
                  <Image
                    className="w-full h-48 object-cover rounded-lg transition-transform group-hover:scale-105"
                    src={post.imageURL}
                    alt={post.mainImage.alt}
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
  );
};

export default Posts;
