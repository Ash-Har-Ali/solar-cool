"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

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

interface ProductCardProps {
  product: Product;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isHovered,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <Link href={`/products`} passHref>
      <div
        key={product._id}
        className="flex flex-col items-center relative cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {product.imagesGallery && product.imagesGallery.length > 0 && (
          <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] mb-4 transition-all duration-300">
            <Image
              src={
                isHovered && product.imagesGallery.length > 1
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
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-center mb-3 overflow-clip text-ellipsis whitespace-pre-wrap w-full line-clamp-2">
            {product.productName}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
