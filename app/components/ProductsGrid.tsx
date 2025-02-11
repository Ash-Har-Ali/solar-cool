"use client";

import React, { useEffect, useState, useRef } from "react";
import { productsQuery } from "../../sanity/lib/queries";
import { client } from "../../sanity/lib/client";
import ProductCard from "./ProductCard";

interface Product {
  _id: string;
  productName: string;
  slug: string;
  imagesGallery: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  }[];
  Price: number;
  bldc: string;
  category: string;
}

const ProductsGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    client
      .fetch(productsQuery)
      .then((data: Product[]) => {
        setProducts([...data, ...data]); // Duplicate products for seamless scrolling
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 1;
    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollAmount;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };
    
    const scrollInterval = setInterval(scroll, 20);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="overflow-x-auto hide-scrollbar px-4" ref={scrollContainerRef}>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-behavior: smooth;
          white-space: nowrap;
        }
      `}</style>
      <div className="flex space-x-10 items-end" style={{ width: "max-content" }}>
        {products.map((product, index) => (
          <ProductCard
            key={index} // Use index since products are duplicated
            product={product}
            isHovered={hoveredProduct === product._id}
            onMouseEnter={() => setHoveredProduct(product._id)}
            onMouseLeave={() => setHoveredProduct(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
