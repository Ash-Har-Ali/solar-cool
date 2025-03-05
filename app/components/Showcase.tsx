import Image from "next/image";
import CTAButton from "./CTAButton";

const Showcase: React.FC = () => {
  return (
    <div className="relative w-full max-w-full h-auto mt-16 flex flex-col lg:flex-row items-center px-10 py-10 md:mb-14 mb-">
      {/* Left Content */}
      <div className="relative z-10 w-full lg:w-1/2 mb-12 flex flex-col md:px-20 justify-between">
        <h2 className="text-[#000000] text-[34px] font-semibold font-['Montserrat'] sm:text-[28px] md:text-[34px] lg:text-[38px]">
          Why <br /> Choose Solarcool?
        </h2>
        <p className="text-black text-base font-normal font-['Montserrat'] leading-normal sm:text-sm md:text-base lg:text-lg py-4">
          “Solar cool“ is established to bring the solar products to everyone’s
          daily life, with modern technology at an affordable cost and high
          efficiency with lower electricity bills. Now your selection of Eco
          Friendly solar products could actually help the planet, as well as
          unlock a wide range of healthy advantages to a customer. We take a
          closer look at how the latest Solar technology is transforming to your
          home and office spaces and introduced our wide range of Solar Air
          Conditioners, Inverter Water Geyser, Solar Refrigerator, Solar Deep
          Freezer, Ceiling Fan to the market.
        </p>
        <div className="mb-">
          <CTAButton
            label="Know More"
            navigateTo="/products"
            bgColor=""
            textColor="#000"
            width="auto"
            className="border-2"
          />
        </div>
      </div>

      {/* Right Content (Stats Section) */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-center lg:items-center justify-between md:h-[450px] px-10">
        <div className="flex justify-center gap-4 lg:mb-40">
          {[
            { count: "5+", text: "Years of Experience" },
            { count: "100+", text: "Satisfied Clients" },
            { count: "20+", text: "Products" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#f4f4f4] rounded-2xl flex w-auto flex-col justify-center items-center p-3"
            >
              <div className="text-center text-black text-4xl font-bold">
                {stat.count}
              </div>
              <div className="text-center text-black text-base font-normal">
                {stat.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Image (Desktop and Mobile) */}
      <div className="lg:absolute lg:inset-0 lg:h-full">
        {/* Overlay for Desktop */}
        <div className="absolute inset-0 bg-black opacity-10 hidden lg:block" />

        {/* Desktop Background */}
        <div className="hidden lg:block">
          <Image
            className="w-full h-full object-cover"
            src="/images/showcase.svg"
            alt="Background"
            fill
          />
        </div>

        {/* Mobile Background - Full Width */}
        <div className="block lg:hidden w-screen">
          <Image
            className="w-full h-auto object-cover"
            src="/images/showcaseimg.webp"
            alt="Mobile Background"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
