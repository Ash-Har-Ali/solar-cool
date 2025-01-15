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
      <div className="w-[1440px] h-[816px] relative">
        <Image src={banner} alt="Banner" width={1440} height={816} className={styles.bannerImage} />
        <div className="left-[188px] top-[358px] absolute text-white text-[71.09px] font-bold font-['Montserrat']">About Us</div>
        <div className="w-[525px] h-[115px] left-[188px] top-[445.36px] absolute text-white text-2xl font-normal font-['Montserrat']">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
      </div>
      </div>


      <div>
        <div className="flex flex-row justify-center items-center p-5">
          <div><div className="text-black text-base font-normal font-['Montserrat']">About Us</div>
          <div className="text-black text-[34px] font-semibold font-['Montserrat']">Who we are ?</div>
          <div className="w-[615px] h-[263px] text-black text-base font-normal font-['Montserrat'] leading-normal">
          “Solar cool “is established to bring the solar products to everyone’s daily life, with modern technology at an affordable cost and high efficiency with lower electricity bills. Now your selection of Eco Friendly solar products could actually help the planet, as well as unlock a wide range of healthy advantages to a customer. We take a closer look at how the latest Solar technology is transforming to your home and office spaces and introduced our wide range of Solar Air Conditioners, Inverter Water Geyser, Solar Refrigerator, Solar Deep Freezer, Ceiling Fan to the market.<br/>This is also a new starting point for the next generation of air-conditioners, and our air conditioner technology has immense potential to disrupt how air-conditioning has traditionally been provided.
          </div></div>
          <div className="w-[618px] h-[284px] bg-[#006a33]/10 rounded-tl-[142px] rounded-bl-[142px] flex justify-center items-center">
          <Image src={solarCoolLogo1} alt="Solar Cool Logo" width={345} height={255.25} className={styles.logoImage}/>
          </div>
        </div>


        <div className="flex justify-center items-center space-x-8">
         {/* Vision Box */}
          <div className="w-[526px] h-[342px] bg-[#048c46] rounded-[15px] flex flex-col justify-between p-4">
            <div className="text-white text-[34px] font-semibold font-['Montserrat']">Vision</div>
            <div className="w-[480px] h-[197px] text-white text-base font-normal font-['Montserrat'] leading-normal flex-grow flex justify-center items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>

         {/* Mission Box */}
          <div className="w-[525px] h-[342px] bg-[#006a33] rounded-[15px] flex flex-col justify-between p-4">
            <div className="text-white text-[34px] font-semibold font-['Montserrat']">Mission</div>
            <div className="w-[480px] h-[197px] text-white text-base font-normal font-['Montserrat'] leading-normal flex-grow flex justify-center items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>


        <div className='p-5'>
          <div className="text-black text-[34px] font-semibold font-['Montserrat'] ">What Makes Us Different?</div>
          <div className="flex justify-center items-center flex-row space-x-8">
           {/* First Box */}
            <div className="flex justify-center items-center w-[345px] h-[305px] bg-[#e6f1eb] rounded-[30px] flex-col">
            <div className="flex justify-center items-center text-6xl p-3"> <RiVerifiedBadgeLine /> </div>
            <div className="AssuredQuality text-center text-black text-2xl font-semibold font-['Montserrat'] p-3"> Assured Quality </div>
            <div className="w-[303px] h-[95px] text-center text-black text-base font-normal font-['Montserrat'] leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            </div>

           {/* Second Box */}
            <div className="flex justify-center items-center w-[345px] h-[305px] bg-[#e6f1eb] rounded-[30px] flex-col">
            <div className="flex justify-center items-center text-6xl p-3"> <FaRegHandshake /> </div>
            <div className="AssuredQuality text-center text-black text-2xl font-semibold font-['Montserrat'] p-3"> After Sales Service </div>
            <div className="w-[303px] h-[95px] text-center text-black text-base font-normal font-['Montserrat'] leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            </div>

           {/* Third Box */}
            <div className="flex justify-center items-center w-[345px] h-[305px] bg-[#e6f1eb] rounded-[30px] flex-col">
             <div className="flex justify-center items-center text-6xl p-3"> <TbChecklist /> </div>
             <div className="AssuredQuality text-center text-black text-2xl font-semibold font-['Montserrat'] p-3"> Experience </div>
             <div className="w-[303px] h-[95px] text-center text-black text-base font-normal font-['Montserrat'] leading-normal">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             </div>
           </div>
         </div>
        </div>
      </div>
      
    </div>
  );
}
