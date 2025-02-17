import Image from "next/image";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { TbChecklist } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa";
import solarCoolLogo1 from "../../public/images/solarcool-logo2.svg";
import banner from "../../public/images/banner1.png";
import wiborLogo from "../../public/images/wybor-logo.svg";
import SectionTitle from "./components/SectionTitle";
import VisionMissionCard from "./components/VisionMissionCard";
import DifferenceCard from "./components/DifferenceCard";

export default function AboutPage() {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative mb-12">
        <Image
          src={banner}
          alt="Banner"
          className="w-full h-auto object-cover"
          priority
        />
        <div className="container mx-auto px-4 sm:px-12 py-8 absolute inset-0 flex items-center text-white text-center text-4xl md:text-6xl font-bold font-['Montserrat']">
          About Us
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-12 py-8">
        {/* Who We Are Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left max-w- md:w-1/2">
            <SectionTitle title="About Us" subtitle="Who we are?" />
            <p className="text-black text-base font-normal font-['Montserrat'] leading-normal mt-4 text-justify">
              “Solar cool“ is established to bring solar products to everyone’s
              daily life, with modern technology at an affordable cost and high
              efficiency with lower electricity bills. Now your selection of
              Eco-Friendly solar products could actually help the planet, as
              well as unlock a wide range of healthy advantages to a customer.
              We take a closer look at how the latest Solar technology is
              transforming your home and office spaces and introducing a wide
              range of Solar Air Conditioners, Inverter Water Geysers, Solar
              Refrigerators, Solar Deep Freezers, Ceiling Fans to the market. 
            </p>
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2">
            <div className="w-full max-w-4xl h-[270px] bg-[#006a33]/10 rounded-tl-full rounded-bl-full flex justify-center items-center">
              <Image
                src={solarCoolLogo1}
                alt="Solar Cool Logo"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <VisionMissionCard
            title="Vision"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            bgColor="bg-solarcoolgreen"
          />
          <VisionMissionCard
            title="Mission"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            bgColor="bg-[#048b47]"
          />
        </div>

        {/* What Makes Us Different Section */}
        <div className="container mx-auto px-4 sm:px-4 mb-12 py-8">
          <h3 className="text-black text-2xl md:text-4xl font-semibold font-['Montserrat'] mb-8">
            What Makes Us Different?
          </h3>
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 flex-wrap">
            <DifferenceCard
              icon={<RiVerifiedBadgeLine />}
              title="Assured Quality"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <DifferenceCard
              icon={<FaRegHandshake />}
              title="After Sales Service"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <DifferenceCard
              icon={<TbChecklist />}
              title="Experience"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>

        {/* Dedicated Wholesalers of Wybor */}
        <div className="relative mb-12 p-5 container mx-auto px-4 sm:px-12 bg-[#eeeeee] rounded-[25px] py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="md:w-1/2 space-y-6">
              <div className="text-black text-2xl md:text-3xl font-semibold font-['Montserrat']">
                Dedicated Wholesalers of Wybor
              </div>
              <div className="text-black text-base font-normal font-['Montserrat']">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </div>
              <a
                href="https://wybor.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-11 px-[30px] py-2.5 bg-[#006a33] rounded-[40px] inline-flex justify-center items-center gap-2.5 cursor-pointer mt-3">
                  <span className="text-white text-xl font-semibold font-['Montserrat']">
                    Learn More
                  </span>
                </div>
              </a>
            </div>

            {/* Right Content */}
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
              <Image
                src={wiborLogo}
                alt="Wybor Logo"
                className="object-contain p-10"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
