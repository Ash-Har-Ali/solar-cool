"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface CTAButtonProps {
  label: string;
  navigateTo: string;
  bgColor?: string;
  textColor?: string;
  width?: string;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  label,
  navigateTo,
  bgColor = "#fff",
  textColor = "#000",
  width = "auto",
  className = ""
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(navigateTo);
  };

  return (
    <button
      className={`inline-flex items-center gap-1 lg:gap-2  border- rounded-full transition-all duration-300 ease-in-out 
        hover:bg-opacity-90 hover:border-gray-600 hover:scale-105 hover:shadow-lg 
        text-xs sm:text-base md:text-base lg:text-lg px-2 sm:px-4 md:px-4 lg:px-5 py-1 sm:py-2 md:py-1 lg:py-2 ${className}`}
      onClick={handleClick}
      style={{ backgroundColor: bgColor, color: textColor, width }}
    >
      <div className="ContactUs">
        {label}
      </div>

      {/* SVG Icon */}
      <div className="flex justify-center items-center w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8">
        <svg
          className="w-full h-full"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </div>
    </button>
  );
};

export default CTAButton;
