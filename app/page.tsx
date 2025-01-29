"use client";

import Carousel from "./components/Carousel";
import Image from "next/image";
import exploreImage from "../public/images/explore.svg";

const HomePage = () => {
  return (
    <div>
      {/* Carousel Component */}
      <Carousel />

      {/* Popular Products Section */}
      <div className="relative w-full h-[526px] sm:h-[600px]">
        <div className="absolute inset-0 bg-[#e7e7e7]" />

        <div className="absolute left-1/2 top-[80px] transform -translate-x-1/2 text-center text-[#303030] text-[34px] font-semibold font-['Montserrat'] md:text-[40px] lg:text-[48px]">
          Popular Products
        </div>

        <div className="absolute left-[136px] top-[82.23px] w-auto h-[298px]">
          <div className="absolute left-[196.90px] top-0">
            <Image
              src={exploreImage}
              alt="Explore"
              width={244} // Set the width based on your needs
              height={244} // Set the height based on your needs
              className="object-contain" // Ensures the image fits within the given dimensions
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
