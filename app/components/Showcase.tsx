import Image from "next/image";
import CTAButton from "./CTAButton";
import showCaseImage from "../../public/images/showcase.svg";

const Showcase: React.FC = () => {
  return (
    <div className="relative w-full max-w-[1438px] h-auto mt-24 flex flex-col lg:h-[650px] lg:flex-row">
      <div className="relative z-10 text-[#303030] text-[34px] font-semibold font-['Montserrat'] sm:text-[28px] md:text-[34px] lg:text-[38px] lg:absolute left-[186px] top-[42px]">
        Why <br /> Choose Solarcool?
      </div>
      <div className="relative z-10 text-black text-base font-normal font-['Montserrat'] leading-normal sm:text-sm md:text-base lg:text-lg py-4 lg:absolute left-[186px] top-[139px] w-[90%] sm:w-[80%] md:w-[615px]">
        “Solar cool “is established to bring the solar products to everyone’s
        daily life, with modern technology at an affordable cost and high
        efficiency with lower electricity bills. Now your selection of Eco
        Friendly solar products could actually help the planet, as well as
        unlock a wide range of healthy advantages to a customer. We take a
        closer look at how the latest Solar technology is transforming to your
        home and office spaces and introduced our wide range of Solar Air
        Conditioners, Inverter Water Geyser, Solar Refrigerator, Solar Deep
        Freezer, Ceiling Fan to the market.{" "}
      </div>

      {/* CTA Button */}
      <div className="relative z-10 flex justify-center mt-6 lg:absolute left-1/2 lg:top-[530px] transform lg:-translate-x-1/2">
        <CTAButton
          label="Know More"
          navigateTo="/products"
          bgColor="#fff"
          textColor="#000"
          width="auto"
        />
      </div>

      {/* Stats Cards */}
      <div className="relative z-10 flex justify-center mt-6 lg:absolute left-[75%] transform lg:-translate-x-1/2 lg:top-[33px] w-[80%] sm:w-[95%] md:w-[344px]">
        <div className="flex justify-between gap-8 w-full">
          {[
            { count: "5+", text: "Years of Experience" },
            { count: "100+", text: "Satisfied Clients" },
            { count: "20+", text: "Products" }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col justify-center items-center p-5"
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
        <div className="absolute inset-0 bg-black opacity-10"></div>{" "}
        {/* Light overlay for better readability */}
        <Image
          className="w-full h-full object-cover"
          src={showCaseImage}
          alt="Background"
          layout="responsive"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Showcase;
