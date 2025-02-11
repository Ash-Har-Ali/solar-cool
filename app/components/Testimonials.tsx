import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    role: "Founder - Green Energy",
    text: "Solar Cool has completely transformed the way we use energy! Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    role: "CEO - Solar Innovations",
    text: "Amazing product! Great customer service and highly efficient.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Robert Williams",
    role: "Managing Director - Eco Future",
    text: "A game-changer for sustainable energy. Best decision we've made.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Sustainability Expert",
    text: "Highly efficient and reliable! Our energy bills have significantly dropped.",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="w-full h-96 bg-gradient-to-r from-solarcoolgreen to-[#0C8749] py-16 px-6 flex justify-center items-center">
      <div className="max-w-7xl text-center text-white w-full">
        {/* Star Rating */}
        <div className="flex justify-center items-center space-x-2 text-lg mb-4">
          <span className="text-yellow-400 text-xl">★★★★★</span>
          <span className="font-semibold">Rated 5/5</span>
          <span className="opacity-80">by happy customers</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>

        {/* Horizontal Scrollable Testimonials */}
        <div className="flex gap-6 overflow-x-auto scroll-smooth px-4 py-2 overflow-clip text-ellipsis whitespace-pre-wrap scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-lg shadow-lg w-[320px] flex-shrink-0"
            >
              <p className="text-white text-lg opacity-90">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm opacity-80">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
