import Image from "next/image";
import solarCoolLogo1 from "./solar-cool-logo-1.png";

export const Frame = () => {
  return (
    <div className="gap-[108px] inline-flex items-center relative">
      <Image
        className="relative"
        alt="Solar cool logo"
        src={solarCoolLogo1}
        width={165}
        height={54}
        priority
      />

      <div className="gap-[25px] flex-[0_0_auto] inline-flex items-center relative">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal]">
          Home
        </div>
        <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#0169b3] text-base tracking-[0] leading-[normal]">
          About
        </div>
        <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal]">
          Products
        </div>
        <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal]">
          Gallery
        </div>
        <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal]">
          Blogs
        </div>
        <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal]">
          Contact us
        </div>
      </div>

      <div className="inline-flex items-center justify-center gap-2.5 px-[25px] py-[15px] relative flex-[0_0_auto] bg-[#048c46] rounded-[30px]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal]">
          Save Energy Now!
        </div>
      </div>
    </div>
  );
};
