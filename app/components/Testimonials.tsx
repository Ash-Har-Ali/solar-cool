import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    role: "Founder - Green Energy",
    text:
      "Solar Cool has completely transformed the way we use energy! Highly recommended. Amazing product! Great customer service and highly efficient.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Jane Smith",
    role: "CEO - Solar Innovations",
    text:
      "Amazing product! Great customer service and highly efficient.Solar Cool has completely transformed the way we use energy! Highly recommended",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "Robert Williams",
    role: "Managing Director - Eco Future",
    text:
      "A game-changer for sustainable energy. Best decision we've made.Solar Cool has completely transformed the way we use energy! Highly recommended",
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    name: "Emily Johnson",
    role: "Sustainability Expert",
    text:
      "Highly efficient and reliable! Our energy bills have significantly dropped.Solar Cool has completely transformed the way we use energy! Highly recommended",
    image: "https://randomuser.me/api/portraits/women/60.jpg"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change testimonial every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 py-16 px-6 flex justify-center items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/testimonial.webp"
        alt="Testimonials Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Overlay to darken background for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="max-w-8xl text-center text-white w-full z-20 relative">
        {/* Star Rating */}
        <div className="flex justify-center items-center space-x-2 text-lg mb-4">
          <span className="text-[#f5f230] text-xl">★★★★★</span>
          <span className="font-semibold">Rated 5/5</span>
          <span className="opacity-80">by happy customers</span>
        </div>

        {/* Carousel Animation */}
        <div className="relative w-[360px] md:w-[700px] max-w-[760px] h-70 mx-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-lg bg-black/30 flex flex-col justify-between"
            >
              {/* Testimonial Text */}
              <p className="text-white text-lg opacity-90 overflow-clip text-ellipsis whitespace-pre-wrap w-full">
                &quot;{testimonials[currentIndex].text}&quot;
              </p>

              {/* User Info at the bottom */}
              <div className="flex items-center mt-6 space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm opacity-80">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
