"use client";

import React, { useEffect, useState } from "react";
import Carousel from "./components/BannerCarousel";
import Image from "next/image";
import showCaseImage from "../public/images/showcase.svg";
import CTAButton from "./components/CTAButton";
import { productsQuery } from "../sanity/lib/queries";
import { client } from "../sanity/lib/client";

interface Product {
  _id: string;
  productName: string;
  slug: string;
  imagesGallery: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  }[];
  Price: number;
  bldc: string;
  category: string;
}

const ProductsGrid: React.FC<React.PropsWithChildren> = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  useEffect(() => {
    client
      .fetch(productsQuery)
      .then((data: Product[]) => {
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="overflow-x-auto hide-scrollbar px-4">
        <div className="flex space-x-6 sm:space-x-10 md:space-x-14 lg:space-x-20 items-end">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex flex-col items-center"
              onMouseEnter={() => setHoveredProduct(product._id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {product.imagesGallery && product.imagesGallery.length > 0 && (
                <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-auto transition-all duration-300">
                  <Image
                    src={
                      hoveredProduct === product._id &&
                      product.imagesGallery.length > 1
                        ? product.imagesGallery[1].asset.url
                        : product.imagesGallery[0].asset.url
                    }
                    alt={product.imagesGallery[0].alt || product.productName}
                    layout="responsive"
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
              )}
              <div className="w-[200px] sm:w-[250px] md:w-[300px] border rounded-lg shadow-lg bg-white p-3 mt-2 text-center">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold">
                  {product.productName}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="w-full">
        <Carousel />
      </div>
      <div className="relative w-full h-[526px] sm:h-[600px] lg:h-[650px]">
        <div className="absolute inset-0 bg-[#e7e7e7]" />
        <div className="absolute left-1/2 top-[50px] transform -translate-x-1/2 text-center text-[#303030] text-[34px] font-semibold font-['Montserrat'] sm:text-[34px] md:text-[34px] lg:text-[34px]">
          Popular Products
        </div>
        <div className="absolute left-1/2 top-[180px] transform -translate-x-1/2 flex flex-col items-center space-y-6">
          <div className="text-white/60 text-[80px] sm:text-[140px] md:text-[180px] lg:text-[200px] font-bold font-['Montserrat']">
            Explore
          </div>
        </div>
        <div className="absolute bottom-[70px] left-1/2 transform -translate-x-1/2 w-full">
          <ProductsGrid />
        </div>
      </div>
      <div className="relative w-full max-w-[1438px] h-auto mt-24 flex flex-col sm:flex-col lg:h-[650px] lg:flex-row">
        {/* Text Section */}
        <div className="order-1 lg:absolute left-[186px] top-[42px] text-[#303030] text-[34px] font-semibold font-['Montserrat'] sm:text-[28px] md:text-[34px] lg:text-[38px]">
          Why
          <br />
          Choose Solarcool?
        </div>
        <div className="order-2 lg:absolute left-[186px] top-[139px] w-[90%] sm:w-[80%] md:w-[615px] text-black text-base font-normal font-['Montserrat'] leading-normal sm:text-sm md:text-base lg:text-lg py-4">
          Solar cool is established to bring solar products to everyone’s daily
          life...
        </div>

        {/* CTA Button */}
        <div className="order-3 flex justify-center mt-6 sm:mt-6 md:mt-8 lg:absolute left-1/2 lg:top-[530px] transform lg:-translate-x-1/2">
          <CTAButton
            label="Know More"
            navigateTo="/products"
            bgColor="#fff"
            textColor="#000"
            width="auto"
          />
        </div>

        {/* Stats Cards */}
        <div className="order-4 flex justify-center mt-6 lg:absolute left-[75%] transform lg:-translate-x-1/2 lg:top-[33px] w-[80%] sm:w-[95%] md:w-[344px]">
          <div className="flex justify-between gap-8 w-full">
            <div className="bg-[#f4f4f4] rounded-2xl flex flex-col justify-center items-center p-5">
              <div className="text-center text-black text-[34.35px] font-bold">
                5+
              </div>
              <div className="text-center text-black text-[15.03px] font-normal">
                Years of <br /> Experience
              </div>
            </div>

            <div className="bg-[#f4f4f4] rounded-2xl flex flex-col justify-center items-center p-5">
              <div className="text-center text-black text-[34.35px] font-bold">
                100+
              </div>
              <div className="text-center text-black text-[15.03px] font-normal">
                Satisfied <br /> Clients
              </div>
            </div>

            <div className="bg-[#f4f4f4] rounded-2xl flex flex-col justify-center items-center p-5">
              <div className="text-center text-black text-[34.35px] font-bold">
                20+
              </div>
              <div className="text-center text-black text-[15.03px] font-normal">
                Products
              </div>
            </div>
          </div>
        </div>

        {/* Showcase Image */}
        <div className="order-5 relative w-full h-[546px] sm:h-[600px] md:h-[650px] lg:absolute inset-0">
          <Image
            className="w-full h-full object-cover"
            src={showCaseImage}
            alt="Background"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold text-center mb-8 font-['Montserrat']">
          Product Categories
        </h1>

        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-4">
          {/* Solar AC - Full width on small screens, 50% on large screens */}
          <div className="w-full lg:w-1/2 bg-solarcoolgreen rounded-[30px] p-6 relative h-[50vh] lg:h-[calc(100vh-180px)]">
            <h2 className="absolute bottom-6 left-6 text-3xl font-semibold text-white font-['Montserrat']">
              Solar Air Conditioner
            </h2>
          </div>

          {/* Right side container for 2x2 grid, full width on small screens */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            {/* Cooler */}
            <div className="bg-solarcoolgreen rounded-[30px] p-6 relative h-[25vh] lg:h-[calc((100vh-200px)/2)]">
              <h3 className="absolute bottom-6 left-6 text-lg font-bold text-white font-['Montserrat']">
                Cooler
              </h3>
            </div>

            {/* Speaker */}
            <div className="bg-solarcoolgreen rounded-[30px] p-6 relative h-[25vh] lg:h-[calc((100vh-200px)/2)]">
              <h3 className="absolute bottom-6 left-6 text-lg font-bold text-white font-['Montserrat']">
                Speaker
              </h3>
            </div>

            {/* Smart Watch */}
            <div className="bg-solarcoolgreen rounded-[30px] p-6 relative h-[25vh] lg:h-[calc((100vh-200px)/2)]">
              <h3 className="absolute bottom-6 left-6 text-lg font-bold text-white font-['Montserrat']">
                Smart Watch
              </h3>
            </div>

            {/* Washing Machine */}
            <div className="bg-solarcoolgreen rounded-[30px] p-6 relative h-[25vh] lg:h-[calc((100vh-200px)/2)]">
              <h3 className="absolute bottom-6 left-6 text-lg font-bold text-white font-['Montserrat']">
                Washing Machine
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
