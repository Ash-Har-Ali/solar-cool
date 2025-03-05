import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const products = [
  { name: "Cooler", image: "/images/cooler.png", link: "/products/cooler" },
  { name: "BLDC Fan", image: "/images/Fan.webp", link: "/products/bldcFan" },
  { name: "Smart Watch", image: "/images/SmartWatch.png", link: "/products/smartWatch" },
  { name: "Washing Machine", image: "/images/WashingMachine.png", link: "/products/washingMachine" },
  { name: "TV", image: "/images/tv.png", link: "/products/tv" },
  { name: "Water Geyser", image: "/images/Geyser.webp", link: "/products/geyser" },
];

const ProductCategories = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 2) % products.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <div className="container mx-auto p-4">
      <div className="text-[#000000] text-[34px] font-semibold font-['Montserrat'] sm:text-[28px] md:text-[34px] lg:text-[38px] text-center mb-8">
        Product Categories
      </div>
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:gap-0 gap-8 mb-12 lg:mb-6 lg:h-[590px] px-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-full lg:w-1/2 rounded-[35px] h-auto relative overflow-hidden group transition-all duration-300 lg:p-5"
        >
          <Link href="/products/ac">
            <Image
              src="/images/acbanner.png"
              alt="AC Banner"
              className="w-full h-auto object-cover cursor-pointer"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              width={500}
              height={500}
            />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-6 left-6 lg:left-12 lg:bottom-10 md:text-3xl text-2xl font-semibold text-white font-['Montserrat']"
            >
              Solar Air Conditioner
            </motion.h2>
          </Link>
        </motion.div>

        <div className="w-full lg:w-1/2 overflow-hidden relative lg:p-6">
          <div
            className={`grid ${isMobile ? "grid-cols-2 gap-6" : "grid-cols-2 gap-6 lg:grid-cols-2"}`}
          >
            {(isMobile ? products : [...products, ...products].slice(index, index + 4)).map((product, idx) => (
              <motion.div
                key={idx}
                className="rounded-[30px] relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
              >
                <Link href={product.link}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-cover"
                    width={500}
                    height={500}
                    priority
                  />
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-3 left-6 text-lg font-bold text-white font-['Montserrat']"
                  >
                    {product.name}
                  </motion.h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
