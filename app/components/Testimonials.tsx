import React, { useEffect, useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    role: "Founder - Green Energy",
    text:
      "Solar Cool has completely transformed the way we use energy! Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Jane Smith",
    role: "CEO - Solar Innovations",
    text: "Amazing product! Great customer service and highly efficient.",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "Robert Williams",
    role: "Managing Director - Eco Future",
    text: "A game-changer for sustainable energy. Best decision we've made.",
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    name: "Emily Johnson",
    role: "Sustainability Expert",
    text:
      "Highly efficient and reliable! Our energy bills have significantly dropped.",
    image: "https://randomuser.me/api/portraits/women/60.jpg"
  },
  {
    name: "John Doe",
    role: "Founder - Green Energy",
    text:
      "Solar Cool has completely transformed the way we use energy! Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  }
];

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let isPaused = false;
    const scrollSpeed = 1; // Adjust speed here

    const scrollInterval = setInterval(() => {
      if (!isPaused) {
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0; // Reset scroll for seamless looping
        } else {
          scrollContainer.scrollLeft += scrollSpeed;
        }
      }
    }, 16); // Roughly 60fps

    // Pause on hover
    scrollContainer.addEventListener("mouseenter", () => (isPaused = true));
    scrollContainer.addEventListener("mouseleave", () => (isPaused = false));

    // Cleanup on component unmount
    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener(
        "mouseenter",
        () => (isPaused = true)
      );
      scrollContainer.removeEventListener(
        "mouseleave",
        () => (isPaused = false)
      );
    };
  }, []);

  return (
    <div className="relative w-full h-96 py-16 px-6 flex justify-center items-center">
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
      <div className="max-w-8xl text-center text-white w-full z-20">
        {/* Star Rating */}
        <div className="flex justify-center items-center space-x-2 text-lg mb-4">
          <span className="text-[#f5f230] text-xl">★★★★★</span>
          <span className="font-semibold">Rated 5/5</span>
          <span className="opacity-80">by happy customers</span>
        </div>

        {/* Horizontal Auto-Scrollable Testimonials */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth px-4 py-2 whitespace-nowrap scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) =>
            <div
              key={index}
              className="p-6 rounded-lg w-[360px] flex-shrink-0 bg-black/30 flex flex-col justify-between h-70"
            >
              {/* Testimonial Text */}
              <p className="text-white text-lg opacity-90 overflow-clip text-ellipsis whitespace-pre-wrap w-full">
                &quot;{testimonial.text}&quot;
              </p>

              {/* User Info at the bottom */}
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
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
