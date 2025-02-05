import Image from "next/image";
import CTAButton from "./CTAButton";
import showCaseImage from "../../public/images/showcase.svg";

const Showcase: React.FC = () => {
  return (
    <div className="relative w-full max-w-full h-auto mt-16 flex flex-col lg:flex-row items-center px-10 py-10 mb-10">
      {/* Left Content */}
      <div className="relative z-10 w-full lg:w-1/2 mb-12 flex flex-col justify-between">
        <h2 className="text-[#303030] text-[34px] font-semibold font-['Montserrat'] sm:text-[28px] md:text-[34px] lg:text-[38px]">
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
        <div className="mb-6">
          <CTAButton
            label="Know More"
            navigateTo="/products"
            bgColor="#fff"
            textColor="#000"
            width="auto"
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-center lg:items-center justify-between py-50">
        <div className="flex justify-center gap-4 mb-6 lg:mb-40 ">
          {[
            { count: "5+", text: "Years of Experience" },
            { count: "100+", text: "Satisfied Clients" },
            { count: "20+", text: "Products" }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#f4f4f4] rounded-2xl flex w-auto flex-col justify-center items-center p-3"
            >
              <div className="text-center text-black text-[34.35px] font-bold">
                {stat.count}
              </div>
              <div className="text-center text-black text-[15.03px] font-normal">
                {stat.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <Image
          className="w-full h-full object-cover"
          src={showCaseImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Showcase;
