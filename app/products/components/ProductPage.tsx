"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { productsQuery } from "../../../sanity/lib/queries";
import ProductCard from "../components/ProductCard";
import { client } from "../../../sanity/lib/client";
import { StaticImageData } from "next/image";

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
  title: string;
  category: string;
  bannerImageDesktop: string | StaticImageData;
  bannerImageMobile: string | StaticImageData;
}

const SkeletonCard: React.FC = () => (
  <div className="animate-pulse bg-gray-300 rounded-md h-64 w-full" />
);

const ProductPage: React.FC<ProductPageProps> = ({ title, category, bannerImageDesktop, bannerImageMobile }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    sortOrder: "price-asc",
    filterBLDC: null as boolean | null,
  });

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const fetchedProducts = await client.fetch(productsQuery);
      if (fetchedProducts.length === 0) {
        setError("No products found.");
      } else {
        setProducts(fetchedProducts);
        setError(null);
      }
    } catch (err) {
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const productCategory = product.category;
      if (Array.isArray(productCategory)) {
        return productCategory.some(
          (cat) => typeof cat === "object" && cat.value?.toLowerCase() === category.toLowerCase()
        );
      }
      if (typeof productCategory === "object" && productCategory?.value) {
        return productCategory.value.toLowerCase() === category.toLowerCase();
      }
      return typeof productCategory === "string" && productCategory.toLowerCase() === category.toLowerCase();
    });
  }, [products, category]);

  const sortedAndFilteredProducts = useMemo(() => {
    return filteredProducts
      .filter((product) => (filters.filterBLDC === null ? true : product.bldc === filters.filterBLDC))
      .sort((a, b) => (filters.sortOrder === "price-asc" ? a.Price - b.Price : b.Price - a.Price));
  }, [filteredProducts, filters]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 sm:px-12 py-8 ">
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
    <div className="bg-[#e7e7e7]">
      <div className="relative mb-12">
        <Image src={bannerImageDesktop} alt={`${title} Banner`} className="hidden sm:block object-cover w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[730px] 2xl:h-[900px] mt-7" width={1920} height={1080} priority />
        <Image src={bannerImageMobile} alt={`${title} Banner`} className="block sm:hidden object-cover w-full h-[600px] mt-7" width={768} height={500} priority />
        <div className="container mx-auto px-6 sm:px-12 py-8 absolute inset-0 flex items-start mt-20 md:mt-0 md:mb-10 sm:items-center sm:justify-start text-white text-center text-4xl md:text-6xl font-bold font-['Montserrat']">
          <div className="w-full sm:w-auto sm:relative sm:top-auto items-start">{title}</div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-12 py-8">
        <div className="flex flex-wrap justify-center space-x-4 mb-12 gap-4">
          <button onClick={() => setFilters({ ...filters, filterBLDC: null })} className="px-4 py-2 bg-white text-[#036d39] font-medium rounded-md hover:bg-[#036d39] hover:text-white transition duration-300">All Products</button>
          <button onClick={() => setFilters({ ...filters, sortOrder: "price-asc" })} className="px-4 py-2 bg-white text-[#036d39] font-medium rounded-md hover:bg-[#036d39] hover:text-white transition duration-300">Lowest Price</button>
          <button onClick={() => setFilters({ ...filters, sortOrder: "price-desc" })} className="px-4 py-2 bg-white text-[#036d39] font-medium rounded-md hover:bg-[#036d39] hover:text-white transition duration-300">Highest Price</button>
          <button onClick={() => setFilters({ ...filters, filterBLDC: true })} className="px-4 py-2 bg-white text-[#036d39] font-medium rounded-md hover:bg-[#036d39] hover:text-white transition duration-300">BLDC Only</button>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {sortedAndFilteredProducts.length > 0 ? (
            sortedAndFilteredProducts.map((product) => (
              <ProductCard key={product._id} images={product.imagesGallery.map((image) => ({ url: image.asset.url, alt: image.alt }))} name={product.productName} price={product.Price} categories={Array.isArray(product.category) ? product.category.map((cat) => cat.title) : []} isBLDC={product.bldc} />
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
