"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { productsQuery } from "../../sanity/lib/queries";
import { client } from "../../sanity/lib/client";

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

  useEffect(() => {
    client
      .fetch(productsQuery)
      .then((data: Product[]) => {
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="overflow-x-auto hide-scrollbar px-4">
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="flex space-x-10 sm:space-x-10 md:space-x-14 lg:space-x-20 items-end">
        {products.map((product) => (
          <div
            key={product._id}
            className="flex flex-col items-center relative"
            onMouseEnter={() => setHoveredProduct(product._id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            {product.imagesGallery && product.imagesGallery.length > 0 && (
              <div className=" bottom-3/4 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px]  transition-all duration-300">
                <Image
                  src={
                    hoveredProduct === product._id && product.imagesGallery.length > 1
                      ? product.imagesGallery[1].asset.url
                      : product.imagesGallery[0].asset.url
                  }
                  alt={product.imagesGallery[0].alt || product.productName}
                  layout="fill"
                  objectFit="contain"
                  className="absolute top-0 left-0 z-10"
                />
              </div>
            )}
            <div className="w-[200px] sm:w-[250px] md:w-[300px] h-[100px] sm:h-[250px] md:h-[150px] border-white rounded-lg shadow-lg bg-white p-3 flex justify-center items-end z-0 relative">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold justify-center text-center mb-3">
                {product.productName}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PopularProducts: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] sm:h-[550px] lg:h-[560px]">
      <div className="absolute inset-0 bg-[#e7e7e7]" />
      <div className="absolute left-1/2 top-[50px] transform -translate-x-1/2 text-center text-[#000000] text-[34px] font-semibold font-['Montserrat'] sm:text-[28px] md:text-[34px] lg:text-[38px] mb-8">
        Popular Products
      </div>
      <div className="absolute left-1/2 top-[180px] transform -translate-x-1/2 flex flex-col items-center space-y-6">
        <div className="text-white/60 text-[80px] sm:text-[140px] md:text-[180px] lg:text-[200px] font-bold font-['Montserrat']">
          Explore
        </div>
      </div>
      <div className="absolute bottom-[80px] left-1/2 transform -translate-x-1/2 w-full">
        <ProductsGrid />
      </div>
    </div>
  );
};

export default PopularProducts;
