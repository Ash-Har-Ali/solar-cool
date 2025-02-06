'use client'; // Add this directive to indicate client-side component
import React from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation for client-side navigation

interface CTAButtonProps {
  label: string;
  navigateTo: string;  // New prop for target page URL
  bgColor?: string;
  textColor?: string;
  width?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ label, navigateTo, bgColor = '#fff', textColor = '#000', width = 'auto' }) => {
  const router = useRouter(); // Using the correct client-side hook

  const handleClick = () => {
    router.push(navigateTo); // Navigate to the specified page
  };

  return (
    <button
      className={`inline-flex items-center gap-2 py-2 px-4 border-2 rounded-full transition-all duration-300 ease-in-out
        ${bgColor ? `bg-[${bgColor}]` : 'bg-white'} 
        ${textColor ? `text-[${textColor}]` : 'text-black'} 
        ${width === 'auto' ? 'w-auto' : width}
        hover:bg-opacity-90 hover:border-gray-600 hover:scale-105 hover:shadow-lg hover:text-black`} // Enhanced hover effect
      onClick={handleClick}
    >
      <div className="ContactUs">{label}</div>

      {/* SVG Icon */}
      <div className="flex justify-center items-center w-6 h-6">
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
