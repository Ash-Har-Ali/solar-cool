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
      "Amazing product! Great customer service and highly efficient. Solar Cool has completely transformed the way we use energy! Highly recommended.",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "Robert Williams",
    role: "Managing Director - Eco Future",
    text:
      "A game-changer for sustainable energy. Best decision we've made. Solar Cool has completely transformed the way we use energy! Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    name: "Emily Johnson",
    role: "Sustainability Expert",
    text:
      "Highly efficient and reliable! Our energy bills have significantly dropped. Solar Cool has completely transformed the way we use energy! Highly recommended.",
    image: "https://randomuser.me/api/portraits/women/60.jpg"
  }
];

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(
    () => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    },
    [matches, query]
  );

  return matches;
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  useEffect(
    () => {
      const interval = setInterval(() => {
        setCurrentIndex(
          prevIndex =>
            isLargeScreen
              ? (prevIndex + 3) % testimonials.length
              : (prevIndex + 1) % testimonials.length
        );
      }, 4000);

      return () => clearInterval(interval);
    },
    [isLargeScreen]
  );

  const visibleTestimonials = isLargeScreen
    ? [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length]
      ]
    : [testimonials[currentIndex]];

  return (
    <div className="relative w-full h-auto py-16 px-6 flex justify-center items-center overflow-hidden">
      <Image
        src="/images/testimonial.webp"
        alt="Testimonials Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="max-w-7xl text-center text-white w-full z-20 relative">
        <div className="flex justify-center items-center space-x-2 text-lg mb-4">
          <span className="text-[#f5f230] text-xl">★★★★★</span>
          <span className="font-semibold">Rated 5/5</span>
          <span className="opacity-80">by happy customers</span>
        </div>

        <div className="relative w-[360px] md:w-[900px] lg:w-[1200px] max-w-[1300px] mx-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row gap-6 justify-center items-center"
            >
              {visibleTestimonials.map((testimonial, index) =>
                <div
                  key={index}
                  className="p-6 rounded-lg bg-black/30 flex flex-col justify-between max-w-[360px] md:max-w-[300px] lg:max-w-[400px]"
                >
                  <p className="text-white text-lg opacity-90 w-full">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex items-center mt-6 space-x-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm opacity-80">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
