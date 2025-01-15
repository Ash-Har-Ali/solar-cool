import Image from 'next/image';
import styles from '../styles/about.module.css';
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { TbChecklist } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa6";
import solarCoolLogo1 from "../../public/images/solarcool-logo.png";
import banner from "../../public/images/banner1.png";

export default function AboutPage() {
  return (
    <div>
      <div>
        <div className="relative">
          <Image src={banner} alt="Banner" layout="responsive" width={1440} height={816} className={`${styles.bannerImage} w-full`} />
          <div className="absolute left-[12%] md:left-[13%] top-[30%] md:top-[40%] text-white text-[5vw] font-bold font-['Montserrat']">
            About Us
          </div>
          <div className="absolute left-[12%] md:left-[13%] top-[45%] md:top-[55%] text-white text-lg md:text-2xl font-normal font-['Montserrat'] max-w-[80%] md:max-w-[30%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row justify-center items-center p-5">
          <div className="text-center md:text-left max-w-3xl">
            <div className="text-black text-base font-normal font-['Montserrat']">About Us</div>
            <div className="text-black text-[2rem] md:text-[34px] font-semibold font-['Montserrat']">Who we are ?</div>
            <div className="text-black text-base font-normal font-['Montserrat'] leading-normal max-w-full md:max-w-[60%] mx-auto">
              “Solar cool“ is established to bring solar products to everyone’s daily life, with modern technology at an affordable cost and high efficiency with lower electricity bills. Now your selection of Eco-Friendly solar products could actually help the planet, as well as unlock a wide range of healthy advantages to a customer. We take a closer look at how the latest Solar technology is transforming your home and office spaces and introducing a wide range of Solar Air Conditioners, Inverter Water Geysers, Solar Refrigerators, Solar Deep Freezers, Ceiling Fans to the market.
            </div>
          </div>
          <div className="w-full md:w-auto bg-[#006a33]/10 rounded-tl-[142px] rounded-bl-[142px] flex justify-center items-center mt-5 md:mt-0">
            <Image src={solarCoolLogo1} alt="Solar Cool Logo" layout="intrinsic" width={345} height={255.25} className={styles.logoImage} />
          </div>
        </div>

        <div className="flex justify-center items-center space-x-8 mt-8 flex-wrap">
          {/* Vision Box */}
          <div className="w-full md:w-[45%] lg:w-[30%] h-auto bg-[#048c46] rounded-[15px] flex flex-col justify-between p-4 mb-5 md:mb-0">
            <div className="text-white text-[34px] font-semibold font-['Montserrat']">Vision</div>
            <div className="w-full text-white text-base font-normal font-['Montserrat'] leading-normal flex-grow flex justify-center items-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </div>
          </div>

          {/* Mission Box */}
          <div className="w-full md:w-[45%] lg:w-[30%] h-auto bg-[#006a33] rounded-[15px] flex flex-col justify-between p-4 mb-5 md:mb-0">
            <div className="text-white text-[34px] font-semibold font-['Montserrat']">Mission</div>
            <div className="w-full text-white text-base font-normal font-['Montserrat'] leading-normal flex-grow flex justify-center items-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="text-black text-[34px] font-semibold font-['Montserrat']">What Makes Us Different?</div>
          <div className="flex justify-center items-center flex-col md:flex-row space-x-8 mt-8 flex-wrap">
            {/* First Box */}
            <div className="flex justify-center items-center w-full md:w-[30%] lg:w-[30%] h-auto bg-[#e6f1eb] rounded-[30px] flex-col mb-5 md:mb-0">
              <div className="flex justify-center items-center text-6xl p-3"><RiVerifiedBadgeLine /></div>
              <div className="AssuredQuality text-center text-black text-2xl font-semibold font-['Montserrat'] p-3">Assured Quality</div>
              <div className="w-full text-center text-black text-base font-normal font-['Montserrat'] leading-normal p-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>

            {/* Second Box */}
            <div className="flex justify-center items-center w-full md:w-[30%] lg:w-[30%] h-auto bg-[#e6f1eb] rounded-[30px] flex-col mb-5 md:mb-0">
              <div className="flex justify-center items-center text-6xl p-3"><FaRegHandshake /></div>
              <div className="AssuredQuality text-center text-black text-2xl font-semibold font-['Montserrat'] p-3">After Sales Service</div>
              <div className="w-full text-center text-black text-base font-normal font-['Montserrat'] leading-normal p-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>

            {/* Third Box */}
            <div className="flex justify-center items-center w-full md:w-[30%] lg:w-[30%] h-auto bg-[#e6f1eb] rounded-[30px] flex-col mb-5 md:mb-0">
              <div className="flex justify-center items-center text-6xl p-3"><TbChecklist /></div>
              <div className="AssuredQuality text-center text-black text-2xl font-semibold font-['Montserrat'] p-3">Experience</div>
              <div className="w-full text-center text-black text-base font-normal font-['Montserrat'] leading-normal p-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
