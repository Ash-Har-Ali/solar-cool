"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { productsQuery } from "../../sanity/lib/queries";
import ProductCard from "../components/ProductCard";
import { client } from "../../sanity/lib/client";

interface Category {
  _id: string;
  title: string;
  value: string;
}

interface Product {
  _id: string;
  productName: string;
  slug: string;
  imagesGallery: { asset: { url: string }; alt: string }[];
  Price: number;
  bldc: boolean;
  category: Category[] | Category | string | null;
}

interface ProductPageProps {
  category: string;
  bannerImage: string;
}

const SkeletonCard: React.FC = () => (
  <div className="animate-pulse bg-gray-300 rounded-md h-64 w-full"></div>
);

const ProductPage: React.FC<ProductPageProps> = ({ category, bannerImage }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const fetchedProducts = await client.fetch(productsQuery);
      setProducts(fetchedProducts);
    } catch (err) {
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filterProductsByCategory = useCallback(
    (products: Product[]): Product[] => {
      return products.filter((product) => {
        const { category: productCategory } = product;

        if (Array.isArray(productCategory)) {
          return productCategory.some((cat) => cat.value.toLowerCase() === category.toLowerCase());
        }

        if (productCategory && typeof productCategory === "object" && "value" in productCategory) {
          return productCategory.value.toLowerCase() === category.toLowerCase();
        }

        if (typeof productCategory === "string") {
          return productCategory.toLowerCase() === category.toLowerCase();
        }

        return false;
      });
    },
    [category]
  );

  const filteredProducts = filterProductsByCategory(products);

  if (loading)
    return (
      <div className="container mx-auto px-4 sm:px-12 py-8">
        <div className="flex items-center justify-center mb-6">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-900"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, idx) => (
            <SkeletonCard key={idx} />
          ))}
        </div>
      </div>
    );

  if (error) return <div>{error}</div>;

  return (
    <div>
      {/* Hero Section */}
      <div className="relative mb-12">
        <Image
          src={bannerImage}
          alt={`${category} Banner`}
          className="w-full h-auto object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-[#048c46] text-center text-4xl md:text-6xl font-bold font-['Montserrat']">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 sm:px-12 py-8">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Our {category.charAt(0).toUpperCase() + category.slice(1)} Products
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product._id}
                images={product.imagesGallery.map((image) => ({
                  url: image.asset.url,
                  alt: image.alt,
                }))}
                name={product.productName}
                price={product.Price}
                categories={
                  Array.isArray(product.category)
                    ? product.category.map((cat) => cat.title)
                    : product.category &&
                      typeof product.category !== "string" &&
                      "title" in product.category
                      ? [product.category.title]
                      : []
                }
                isBLDC={product.bldc}
              />
            ))
          ) : (
            <div>No {category.charAt(0).toUpperCase() + category.slice(1)} products available.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductPage);
