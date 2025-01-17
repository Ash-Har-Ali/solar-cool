// components/ProductCategories.js

import { SanityDocument } from "@sanity/client";
import Image from "next/image";

interface CategoryProps {
  categories: SanityDocument[];
}

const ProductCategories = ({ categories = [] }: CategoryProps) => {
  return (
    <div className="py-10 px-6 sm:px-12 lg:px-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Product Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category._id}
            className="bg-white border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Category Image */}
            {category.mainimage?.asset?.url && (
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={category.mainimage.asset.url}
                  alt={category.mainimage.alt || "Category Image"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
            )}
            {/* Category Name */}
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{category.category}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
