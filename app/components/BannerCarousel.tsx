import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import CTAButton from "./CTAButton";

const images = ["/images/HomeBanner1.webp", "/images/HomeBanner2.webp"];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to next slide with looping effect
  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  // Move to previous slide with looping effect
  const prevSlide = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative w-full h-[400px]  lg:h-[750px]  overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-full flex">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 100 }}
            animate={{ opacity: 100, x: "0%" }}
            exit={{ opacity: 100, x: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[currentIndex]}
              alt={`Banner ${currentIndex + 1}`}
              className="w-full h-full object-fill"
              priority
              width={1920}
              height={850}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition md:left-8 md:p-4"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <ChevronLeftIcon className="h-6 w-6 text-white md:h-8 md:w-8" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition md:right-8 md:p-4"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <ChevronRightIcon className="h-6 w-6 text-white md:h-8 md:w-8" />
      </button>

      {/* Text Overlay */}

      <div className=" w-auto mx-auto left-5 absolute top-[70%] lg:left-20 lg:py-5 md:py-2 sm:top-[65%] ">
        <CTAButton
          label="Contact Us"
          navigateTo="/contact"
          bgColor="#048c46"
          textColor="white"
          width="auto"
          className=" rounded-full bg-solarcoolgreen font-bold text-xs md:text-lg  "
        />
      </div>
    </div>
  );
};

export default Carousel;
