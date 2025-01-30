"use client";

import Carousel from "./components/BannerCarousel";
import Image from "next/image";
import showCaseImage from "../public/images/showcase.svg";
import CTAButton from "./components/CTAButton";

const HomePage = () => {
  return (
    <div>
      {/* Carousel Component */}
      <div className="w-full">
        <Carousel />
      </div>

      {/* Popular Products Section */}
      <div className="relative w-full h-[526px] sm:h-[600px] lg:h-[650px]">
        <div className="absolute inset-0 bg-[#e7e7e7]" />

        <div className="absolute left-1/2 top-[50px] transform -translate-x-1/2 text-center text-[#303030] text-[34px] font-semibold font-['Montserrat'] sm:text-[40px] md:text-[48px] lg:text-[54px]">
          Popular Products
        </div>

        {/* Explore Section */}
        <div className="absolute left-1/2 top-[180px] transform -translate-x-1/2 flex flex-col items-center space-y-6">
          <div className="text-white/60 text-[80px] sm:text-[140px] md:text-[180px] lg:text-[200px] font-bold font-['Montserrat']">
            Explore
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="relative w-full max-w-[1438px] h-[546px] sm:h-[600px] md:h-[650px]">
        {/* Title Section */}
        <div className="absolute left-[186px] top-[42px] text-[#303030] text-[34px] font-semibold font-['Montserrat'] sm:text-[28px] md:text-[34px] lg:text-[38px]">
          Why
          <br />
          Choose Solarcool?
        </div>

        {/* Description Section */}
        <div className="absolute left-[186px] top-[139px] w-[90%] sm:w-[80%] md:w-[615px] text-black text-base font-normal font-['Montserrat'] leading-normal sm:text-sm md:text-base lg:text-lg">
          “Solar cool” is established to bring solar products to everyone’s
          daily life, with modern technology at an affordable cost and high
          efficiency with lower electricity bills. Now your selection of
          Eco-Friendly solar products could actually help the planet, as well as
          unlock a wide range of healthy advantages to a customer. We take a
          closer look at how the latest Solar technology is transforming your
          home and office spaces and have introduced our wide range of Solar Air
          Conditioners, Inverter Water Geysers, Solar Refrigerators, Solar Deep
          Freezers, and Ceiling Fans to the market.
        </div>

        {/* Background Image */}
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src={showCaseImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
        />

        <div className="relative left-[75%] transform -translate-x-1/2 top-[33px] flex justify-between items-center w-[80%] sm:w-[95%] md:w-[344px]">
          <div className="flex justify-between gap-8 w-full">
            <div className="bg-[#f4f4f4] rounded-2xl flex flex-col justify-center items-center p-5">
              <div className="text-center text-black text-[34.35px] font-bold">
                5+
              </div>
              <div className="text-center text-black text-[15.03px] font-normal">
                Years of
                <br />
                Experience
              </div>
            </div>

            <div className="bg-[#f4f4f4] rounded-2xl flex flex-col justify-center items-center p-5">
              <div className="text-center text-black text-[34.35px] font-bold">
                100+
              </div>
              <div className="text-center text-black text-[15.03px] font-normal">
                Satisfied
                <br />
                Clients
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

        {/* CTA Button Section */}
        <div className="absolute left-1/2 top-[430px] transform -translate-x-1/2 sm:top-[500px] md:top-[530px]">
          <CTAButton
            label="Know More"
            navigateTo="/products"
            bgColor="#fff"
            textColor="#000"
            width="auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
 