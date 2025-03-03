import React, { useState } from "react";
import Image from "next/image";

interface ProductCardProps {
  images: { url: string; alt: string }[]; // Array of images
  name: string;
  price: number;
  categories: string[];
  isBLDC: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  images,
  name,
  price,
  categories,
  isBLDC
}) => {
  // State to track the image displayed
  const [isHovered, setIsHovered] = useState(false);

  // Handle hover effect
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="w-full max-w-xs bg-white   rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-full flex flex-col px-5 py-4 mt-2">
        {/* Name with fixed two-line height */}
        <a href="#" className="block">
          <h5 className="text-xl font-semibold text-gray-900 text-start min-h-[56px] line-clamp-2 overflow-clip text-ellipsis whitespace-pre-wrap">
            {name}
          </h5>
        </a>

        {/* BLDC Tag or Empty Space */}
        <div className="mt-2 flex justify-start ">
          {isBLDC
            ? <span className="text-sm font-semibold text-[#ffffff] bg-[#1c7940] py-0.5 px-3 rounded">
                BLDC
              </span>
            : <div className="h-7" /> // Placeholder for spacing
          }
        </div>

        {/* Image with hover effect */}
        <div className="relative w-full h-[230px] mt-4 p-2 rounded-xl">
          <Image
            className="object-contain rounded-xl transition-all duration-300"
            src={isHovered && images.length > 1 ? images[1].url : images[0].url}
            alt={isHovered && images.length > 1 ? images[1].alt : images[0].alt}
            fill
          />
        </div>

        {/* Price */}
        <div className="relative flex items-center justify-start mt-4 ">
          <span className="text-2xl font-bold text-gray-900">
            {price ? `₹${price}` : "Price not set"}
          </span>
        </div>

        {/* Know More and Buy Now Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mt-4 mb-2 w-full">
          <a
            href={`https://wa.me/7012169029?text=I%20want%20to%20know%20more%20about%20this%20product%20${name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-[#048c46] text-white font-semibold rounded-full hover:bg-[#006a33] transition-all duration-200 w-full"
          >
            Know More
          </a>
          <a
            href={`https://wa.me/7012169029?text=I%20want%20to%20buy%20this%20product%20${name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-[#048c46] text-white font-semibold rounded-full hover:bg-[#006a33] transition-all duration-200 w-full"
          >
            Buy Now!
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
