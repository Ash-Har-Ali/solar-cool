'use client'; // Add this directive to indicate client-side component
import React from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation for client-side navigation
import { Button, IconWrapper } from '../styles/CTAButton.styles'; // Import styled components

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
    <Button bgColor={bgColor} textColor={textColor} width={width} onClick={handleClick}>
      <div className="ContactUs">{label}</div>

      {/* SVG Icon */}
      <IconWrapper>
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
      </IconWrapper>
    </Button>
  );
};

export default CTAButton;
