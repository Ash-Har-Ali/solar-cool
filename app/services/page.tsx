"use client";

import Image from "next/image";
import banner from "../../public/images/banner4.png";
import ServiceForm from "../components/ServiceForm";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative mb-12">
        <Image
          src={banner}
          alt="Banner"
          className="w-full h-auto object-cover"
          priority
        />
        <div className="container mx-auto px-4 sm:px-12 py-8 absolute inset-0 flex items-center text-white text-center text-4xl md:text-6xl font-bold font-['Montserrat']">
          Services
        </div>
      </div>
      <div className="relative mb-12 p-5">
        <ServiceForm />
      </div>
      <div className="relative mb-12 p-5">
        <h3 className="text-black text-2xl md:text-4xl font-semibold font-['Montserrat'] mb-8">
          Service Locations
        </h3>
      </div>
      
    </div>
  );
};

export default HomePage;
