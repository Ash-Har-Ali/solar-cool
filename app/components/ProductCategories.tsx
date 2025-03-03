import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const products = [
  { name: "Cooler", image: "/images/cooler.png", link: "/products/cooler" },
  { name: "Speaker", image: "/images/speaker.png", link: "/products/speaker" },
  {
    name: "Smart Watch",
    image: "/images/SmartWatch.png",
    link: "/products/smartWatch"
  },
  {
    name: "Washing Machine",
    image: "/images/WashingMachine.png",
    link: "/products/washingMachine"
  },
  { name: "TV", image: "/images/tv.png", link: "/products/tv" },
  {
    name: "Signage",
    image: "/images/signage.png",
    link: "/products/digitalSignage"
  }
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

  useEffect(
    () => {
      if (!isMobile) {
        const interval = setInterval(() => {
          setIndex(prevIndex => (prevIndex + 2) % products.length);
        }, 4000);
        return () => clearInterval(interval);
      }
    },
    [isMobile]
  );

  return (
    <div className="container mx-auto p-4">
      <div className="text-[#000000] text-[34px] font-semibold font-['Montserrat'] sm:text-[28px] md:text-[34px] lg:text-[38px] text-center mb-8">
        Product Categories
      </div>
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:gap-0 gap-8 mb-12 lg:mb-6 lg:h-[590px] px-4">
        <div className="w-full lg:w-1/2 rounded-[35px] h-auto relative overflow-hidden group hover:scale-105 transform transition-all duration-300 lg:p-5">
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
            <h2 className="absolute bottom-6 left-6 lg:left-12 lg:bottom-10 md:text-3xl text-2xl font-semibold text-white font-['Montserrat'] transition-all duration-300 group-hover:text-yellow-400">
              Solar Air Conditioner
            </h2>
          </Link>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6 lg:grid-cols-2 lg:overflow-hidden lg:p-6">
          {isMobile
            ? products.map((product, idx) =>
                <div
                  key={idx}
                  className="rounded-[30px] relative overflow-hidden group hover:scale-105 transform transition-all duration-700 ease-in-out"
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
                    <h3 className="absolute bottom-3 left-6 text-lg font-bold text-white font-['Montserrat'] transition-all duration-300 group-hover:text-yellow-400">
                      {product.name}
                    </h3>
                  </Link>
                </div>
              )
            : [...products, ...products] // Duplicate for smooth looping
                .slice(index, index + 4) // Get current sliding items
                .map((product, idx) =>
                  <div
                    key={idx}
                    className="rounded-[30px] relative overflow-hidden group hover:scale-105 transform transition-all duration-700 ease-in-out"
                    style={{ transition: "transform 1s ease-in-out" }} // Smooth effect
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
                      <h3 className="absolute bottom-3 left-6 text-lg font-bold text-white font-['Montserrat'] transition-all duration-300 group-hover:text-yellow-400">
                        {product.name}
                      </h3>
                    </Link>
                  </div>
                )}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
