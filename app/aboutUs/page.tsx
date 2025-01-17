import Image from "next/image";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { TbChecklist } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa6";
import solarCoolLogo1 from "../../public/images/solarcool-logo.png";
import banner from "../../public/images/banner1.png";

// Define types for reusable components
interface SectionTitleProps {
  title: string;
  subtitle: string;
}

interface VisionMissionCardProps {
  title: string;
  content: string;
  bgColor: string;
}

interface DifferenceCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

// SectionTitle Component
const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) =>
  <div>
    <div className="text-black text-sm md:text-base font-normal font-['Montserrat']">
      {title}
    </div>
    <div className="text-black text-2xl md:text-4xl font-semibold font-['Montserrat'] mt-2">
      {subtitle}
    </div>
  </div>;

// VisionMissionCard Component
const VisionMissionCard: React.FC<VisionMissionCardProps> = ({
  title,
  content,
  bgColor
}) =>
  <div className={`w-full md:w-[45%] ${bgColor} rounded-lg p-6`}>
    <h3 className="text-white text-2xl font-semibold font-['Montserrat']">
      {title}
    </h3>
    <p className="text-white text-base font-normal font-['Montserrat'] leading-normal mt-4">
      {content}
    </p>
  </div>;

// DifferenceCard Component
const DifferenceCard: React.FC<DifferenceCardProps> = ({
  icon,
  title,
  content
}) =>
  <div className="flex flex-col items-center bg-[#e6f1eb] rounded-lg p-6 max-w-xs">
    <div className="text-6xl text-[#048c46]">
      {icon}
    </div>
    <h4 className="text-black text-xl font-semibold font-['Montserrat'] mt-4">
      {title}
    </h4>
    <p className="text-black text-sm font-normal font-['Montserrat'] text-center mt-4">
      {content}
    </p>
  </div>;

export default function AboutPage() {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative mb-12">
        <Image src={banner} alt="Banner" className={` w-full object-cover`} />

        <div className="absolute left-8 md:left-16 top-[30%] md:top-[40%] text-white text-4xl md:text-6xl font-bold font-['Montserrat']">
          About Us
        </div>
        <div className="absolute left-8 md:left-16 top-[44%] md:top-[50%] text-white text-base md:text-xl text-justify font-normal font-['Montserrat'] max-w-[80%] md:max-w-[40%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-12 py-8">
        {/* Who We Are Section */}
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 mb-12">
          <div className="text-center md:text-left max-w-lg">
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
          <div className="flex justify-center items-center">
            <div className="w-auto max-w-md bg-[#006a33]/10 rounded-tl-[142px] rounded-bl-[142px] flex justify-center items-center">
              <Image
                src={solarCoolLogo1}
                alt="Solar Cool Logo"
                className="object-contain p-9"
              />
            </div>
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <VisionMissionCard
            title="Vision"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            bgColor="bg-[#048c46]"
          />
          <VisionMissionCard
            title="Mission"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            bgColor="bg-[#006a33]"
          />
        </div>

        {/* What Makes Us Different Section */}
        {/* What Makes Us Different Section */}
        <div className="container mx-auto px-4 sm:px-12 py-8">
          <h3 className="text-black text-2xl md:text-4xl font-semibold font-['Montserrat'] mb-8">
            What Makes Us Different?
          </h3>
          <div className="flex flex-col md:flex-row justify-around items-center gap-8 flex-wrap">
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
      </div>
    </div>
  );
}
