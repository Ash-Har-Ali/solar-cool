import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import CTAButton from "./CTAButton";

const images = ["/images/HomeBanner1.webp", "/images/HomeBanner2.webp"];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  // Start animation after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => setStartAnimation(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-slide every 4 seconds after animation starts
  useEffect(
    () => {
      if (startAnimation) {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
      }
    },
    [startAnimation]
  );

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
    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[750px] 2xl:h-[900px] overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-full flex">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 1, x: startAnimation ? "100%" : "0%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 1, x: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[currentIndex]}
              alt={`Banner ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              priority
              width={1920}
              height={850}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      {/* <button
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 sm:p-3 md:p-4 rounded-full hover:bg-opacity-80 transition"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
      </button>
      <button
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 sm:p-3 md:p-4 rounded-full hover:bg-opacity-80 transition"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
      </button> */}

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
