"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { productsQuery } from "../../../sanity/lib/queries";
import ProductCard from "../components/ProductCard";
import { client } from "../../../sanity/lib/client";

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
  <div className="animate-pulse bg-gray-300 rounded-md h-64 w-full" />
);

const ProductPage: React.FC<ProductPageProps> = ({ category, bannerImage }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    sortOrder: "price-asc",
    filterBLDC: null as boolean | null
  });

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const cachedProducts = localStorage.getItem("products");
      if (cachedProducts) {
        setProducts(JSON.parse(cachedProducts));
        setLoading(false);
      } else {
        const fetchedProducts = await client.fetch(productsQuery);
        setProducts(fetchedProducts);
        localStorage.setItem("products", JSON.stringify(fetchedProducts));
        setLoading(false);
      }
    } catch (err) {
      setError("Failed to load products.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filterProductsByCategory = useMemo(
    () => (products: Product[]) => {
      const categoryValue = category.toLowerCase();
      return products.filter((product) => {
        const productCategory = product.category;

        if (Array.isArray(productCategory)) {
          return productCategory.some((cat) => cat.value.toLowerCase() === categoryValue);
        }

        if (productCategory && typeof productCategory === "object" && "value" in productCategory) {
          return productCategory.value.toLowerCase() === categoryValue;
        }

        return (
          typeof productCategory === "string" &&
          productCategory.toLowerCase() === categoryValue
        );
      });
    },
    [category]
  );

  const filteredProducts = useMemo(() => filterProductsByCategory(products), [products, filterProductsByCategory]);

  const handleSortChange = (order: string) => {
    setFilters((prev) => ({ ...prev, sortOrder: order }));
  };

  const handleBLDCFilter = (value: boolean | null) => {
    setFilters((prev) => ({ ...prev, filterBLDC: value }));
  };

  const filteredAndSortedProducts = useMemo(() => {
    return filteredProducts
      .filter((product) => {
        if (filters.filterBLDC === null) return true;
        return product.bldc === filters.filterBLDC;
      })
      .sort((a, b) => {
        if (filters.sortOrder === "price-asc") {
          return a.Price - b.Price;
        } else if (filters.sortOrder === "price-desc") {
          return b.Price - a.Price;
        }
        return 0;
      });
  }, [filteredProducts, filters]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 sm:px-12 py-8">
        <div className="flex items-center justify-center mb-6">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-900" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, idx) => (
            <SkeletonCard key={idx} />
          ))}
        </div>
      </div>
    );
  }

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

      {/* Title Section */}
      <div className="flex items-center justify-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Our {category.charAt(0).toUpperCase() + category.slice(1)} Products
        </h2>
      </div>

      {/* Sorting Buttons */}
      <div className="container mx-auto px-4 sm:px-12 py-8">
        <div className="flex flex-wrap justify-center space-x-4 mb-6 gap-4">
          <button
            onClick={() => handleSortChange("price-asc")}
            className="px-4 py-2 bg-white text-[#036d39] border border-[#036d39] rounded-md hover:bg-[#036d39] hover:text-white transition duration-300"
          >
            Lowest Price
          </button>
          <button
            onClick={() => handleSortChange("price-desc")}
            className="px-4 py-2 bg-white text-[#036d39] border border-[#036d39] rounded-md hover:bg-[#036d39] hover:text-white transition duration-300"
          >
            Highest Price
          </button>
          <button
            onClick={() => handleBLDCFilter(true)}
            className="px-4 py-2 bg-white text-[#036d39] border border-[#036d39] rounded-md hover:bg-[#036d39] hover:text-white transition duration-300"
          >
            BLDC Only
          </button>
          <button
            onClick={() => handleBLDCFilter(null)}
            className="px-4 py-2 bg-white text-[#036d39] border border-[#036d39] rounded-md hover:bg-[#036d39] hover:text-white transition duration-300"
          >
            All Products
          </button>
        </div>

        {/* Product Cards */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {filteredAndSortedProducts.length > 0 ? (
            filteredAndSortedProducts.map((product) => (
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
            <div>
              No {category.charAt(0).toUpperCase() + category.slice(1)} products
              available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductPage);
