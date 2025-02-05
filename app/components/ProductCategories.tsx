import Image from "next/image";
import acbanner from "../../public/images/acbanner.png";
import coolerImage from "../../public/images/cooler.png";
import speakerImage from "../../public/images/speaker.png";
import smartWatchImage from "../../public/images/smartwatch.png";
import washingMachineImage from "../../public/images/washingmachine.png";

const ProductCategories = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-[#000000] text-[34px] font-semibold font-['Montserrat'] sm:text-[28px] md:text-[34px] lg:text-[38px] text-center mb-8">
        Product Categories
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-4 mb-12">
        {/* Solar AC - Full width on small screens, 50% on large screens */}
        <div className="w-full lg:w-1/2 rounded-[35px] relative overflow-hidden">
          <Image
            src={acbanner}
            alt="AC Banner"
            layout="responsive"
            className="w-full h-auto object-cover cursor-pointer"
            priority
          />
          <h2 className="absolute bottom-6 left-6 text-3xl font-semibold text-white font-['Montserrat']">
            Solar Air Conditioner
          </h2>
        </div>

        {/* Right side container for 2x2 grid, full width on small screens */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          {/* Cooler */}
          <div className=" rounded-[30px]  relative overflow-hidden">
            <Image
              src={coolerImage}
              alt="Cooler"
              layout="responsive"
              className="w-full h-auto object-cover"
              priority
            />
            <h3 className="absolute bottom-6 left-6 text-lg font-bold text-white font-['Montserrat']">
              Cooler
            </h3>
          </div>

          {/* Speaker */}
          <div className=" rounded-[30px] relative overflow-hidden">
            <Image
              src={speakerImage}
              alt="Speaker"
              layout="responsive"
              className="w-full h-auto object-cover"
              priority
            />
            <h3 className="absolute bottom-6 left-6 text-lg font-bold text-white font-['Montserrat']">
              Speaker
            </h3>
          </div>

          {/* Smart Watch */}
          <div className=" rounded-[30px] relative overflow-hidden">
            <Image
              src={smartWatchImage}
              alt="Smart Watch"
              layout="responsive"
              className="w-full h-auto object-cover"
              priority
            />
            <h3 className="absolute bottom-6 left-6 text-lg font-bold text-white font-['Montserrat']">
              Smart Watch
            </h3>
          </div>

          {/* Washing Machine */}
          <div className=" rounded-[30px] relative overflow-hidden">
            <Image
              src={washingMachineImage}
              alt="Washing Machine"
              layout="responsive"
              className="w-full h-auto object-fill"
              priority
            />
            <h3 className="absolute bottom-6 left-6 text-lg font-bold text-white font-['Montserrat']">
              Washing Machine
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
