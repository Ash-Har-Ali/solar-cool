'use client'

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import banner1 from "../public/images/banner1.png";
import banner2 from "../public/images/banner2.png";
import banner3 from "../public/images/banner3.png";
import banner4 from "../public/images/banner4.png";


const HomePage = () => {
  const images = [banner1, banner2, banner3, banner4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoize the nextSlide function using useCallback
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]); // Dependency is images.length

  // Memoize the prevSlide function using useCallback
  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]); // Dependency is images.length

  // Use useEffect to automatically change the slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [nextSlide]); // Only rerun the effect if nextSlide changes

  return (
    <div>
      {/* Hero Section with Carousel */}
      <div className="relative mb-12">
        <div className="relative w-full h-[800px]">
          {/* Carousel Images */}
          <div className="absolute inset-0 transition-transform duration-500 ease-in-out">
            <Image
              src={images[currentIndex]}
              alt={`Banner ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Carousel Navigation Buttons */}
          {/* <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-gray-800 bg-opacity-50 rounded-full p-2"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-gray-800 bg-opacity-50 rounded-full p-2"
          >
            &gt;
          </button> */}
        </div>

        {/* Text Overlay */}
        <div className="absolute left-8 top-[30%] text-white text-4xl md:text-6xl font-bold font-['Montserrat']">
          Welcome to Solar Cool
        </div>
        <div className="absolute left-8 top-[44%] text-white text-lg md:text-xl font-normal font-['Montserrat'] max-w-[80%]">
          Harness the power of the sun with innovative solar products that reduce your energy bills and support a sustainable future.
        </div>
      </div>

      {/* About Us Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
        <p className="text-base text-gray-700 text-center max-w-3xl mx-auto">
          Solar Cool is committed to bringing solar products to your daily life. We offer cutting-edge technology at affordable prices to help reduce electricity bills and promote a greener environment.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 px-4">
          <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg w-full md:w-1/3">
            <h3 className="text-4xl text-[#048c46]">💡</h3>
            <h3 className="mt-4 text-xl font-semibold">Solar Products</h3>
            <p className="mt-2 text-center text-gray-600">
              We provide efficient and eco-friendly solar products for your home or business.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg w-full md:w-1/3">
            <h3 className="text-4xl text-[#048c46]">🧑‍💼</h3>
            <h3 className="mt-4 text-xl font-semibold">Consulting Services</h3>
            <p className="mt-2 text-center text-gray-600">
              Our experts offer personalized consulting to guide you in adopting solar energy solutions.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg w-full md:w-1/3">
            <h3 className="text-4xl text-[#048c46]">🤝</h3>
            <h3 className="mt-4 text-xl font-semibold">Customer Support</h3>
            <p className="mt-2 text-center text-gray-600">
              We provide reliable after-sales service to ensure your satisfaction with every purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Solar Cool. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
