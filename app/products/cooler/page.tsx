'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import banner from "../../../public/images/banner-ac.svg";
import { acProductsQuery } from '../../../sanity/lib/queries'; // Updated query import
import ProductCard from '../../components/ProductCard'; // Import the ProductCard component
import { client } from '../../../sanity/lib/client'; // Import your Sanity client setup

interface Category {
  _id: string;
  title: string;
  value: string;
}

interface Product {
  _id: string;
  productName: string;
  slug: string;
  imagesGallery: { asset: { url: string }; alt: string }[]; // Array of images
  Price: number;
  bldc: boolean;
  category: Category[] | Category | string | null; // category could be a string, an array of objects, or an object
}

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await client.fetch(acProductsQuery); // Using the updated query
        console.log('Fetched Products:', fetchedProducts); // Log fetched products to inspect
        setProducts(fetchedProducts);
      } catch (error) {
        setError('Failed to load products.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Filter the products to only include those that have a category with value 'electronics'
  const electronicsProducts = products.filter((product) => {
    console.log('Product Category:', product.category); // Log the category to debug

    // Check if category is an array of objects
    if (Array.isArray(product.category)) {
      return product.category.some((cat) => cat.value === 'electronics');
    }

    // Check if category is a single object
    if (product.category && typeof product.category === 'object' && 'value' in product.category) {
      return product.category.value === 'electronics';
    }

    // Check if category is a string (case insensitive)
    if (typeof product.category === 'string') {
      return product.category.toLowerCase() === 'electronics';
    }

    return false;
  });

  console.log('Electronics Products:', electronicsProducts); // Log the filtered products

  return (
    <div>
      {/* Hero Section */}
      <div className="relative mb-12">
        <Image
          src={banner}
          alt="Air Conditioner Banner"
          className="w-full h-auto object-cover"
          priority // Added the priority prop to the banner image
        />
        <div className="absolute inset-0 flex items-center justify-center text-[#048c46] text-center text-4xl md:text-6xl font-bold font-['Montserrat']">
          Air Conditioner
        </div>
      </div>

      {/* Products Section */}
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Electronics Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {electronicsProducts.length > 0 ? (
            electronicsProducts.map((product) => (
              <ProductCard
                key={product._id}
                images={product.imagesGallery.map(image => ({ url: image.asset.url, alt: image.alt }))}

                name={product.productName}
                price={product.Price}
                categories={
                  Array.isArray(product.category)
                    ? product.category.map((cat) => cat.title) // If category is an array, map the titles
                    : product.category && typeof product.category !== 'string' && 'title' in product.category
                    ? [product.category.title] // If category is an object, access title
                    : [] // Default to an empty array if no category or invalid category
                }
                isBLDC={product.bldc}
              />
            ))
          ) : (
            <div>No electronics products available.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
