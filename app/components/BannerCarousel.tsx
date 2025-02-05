import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const images = [
  "/images/banner1.png",
  "/images/banner2.png",
  "/images/banner3.png",
  "/images/banner4.png",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to next slide with looping effect
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Move to previous slide with looping effect
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
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
    <div className="relative w-full h-[400px] sm:h-[600px] lg:h-[800px] overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-full flex">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            initial={{ opacity:100, x: "100%" }}
            animate={{ opacity: 100, x: "0%" }}
            exit={{ opacity: 100, x: "-100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[currentIndex]}
              alt={`Banner ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              priority
              width={1920}
              height={800}
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

      <div className="container mx-auto px-4 sm:px-12 py-8 absolute left-8 top-[10%] sm:top-[30%] text-white text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg w-[80%] sm:w-[60%]">
        Welcome to Solar Cool
      </div>
      <div className="container mx-auto px-4 sm:px-12  absolute left-8 top-[35%] sm:top-[44%] text-white text-sm sm:text-lg md:text-xl font-normal max-w-[80%] sm:max-w-[60%] drop-shadow-lg">
        Harness the power of the sun with innovative solar products that reduce your energy bills and support a sustainable future.
      </div>
    </div>
  );
};

export default Carousel;
