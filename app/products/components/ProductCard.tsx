import React, { useState } from "react";
import Image from "next/image"; // Import Image from next/image

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
      className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="px-5 py-4 flex flex-col">
        {/* Name */}
        <a href="#" className="block">
          <h5 className="text-xl font-semibold text-gray-900">{name}</h5>
        </a>

        {/* Image with hover effect */}
        <div className="relative w-full h-auto mt-4">
          <Image
            className="w-full h-full object-cover rounded-lg transition-all duration-300"
            src={isHovered && images.length > 1 ? images[1].url : images[0].url} // Ensure images[1] exists
            alt={isHovered && images.length > 1 ? images[1].alt : images[0].alt}
            width={500}
            height={300} // Height adjusted dynamically
            layout="intrinsic"
          />
        </div>

        {/* BLDC Tag */}
        {isBLDC && (
          <div className="mt-3">
            <span className="text-xs text-[#048c46] bg-[#e0f5e0] py-0.5 px-2 rounded">
              BLDC
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-2xl font-bold text-gray-900">
            {price ? `₹${price}` : "Price not set"}
          </span>
        </div>

        {/* Know More Button */}
        <div className="flex items-center justify-between mt-4">
          <a
            href={`https://wa.me/7012169029?text=I%20want%20to%20know%20more%20about%20this%20product%20${name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-[#048c46] text-white font-semibold rounded-lg hover:bg-[#006a33] transition-all duration-200"
          >
            Know More
          </a>
          <a
            href={`https://wa.me/7012169029?text=I%20want%20to%20buy%20this%20product%20${name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-[#048c46] text-white font-semibold rounded-lg hover:bg-[#006a33] transition-all duration-200"
          >
            Buy Now!
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
