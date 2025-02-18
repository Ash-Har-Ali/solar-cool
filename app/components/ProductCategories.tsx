import Image from "next/image";
import Link from "next/link";

const ProductCategories = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-[#000000] text-[34px] font-semibold font-['Montserrat'] sm:text-[28px] md:text-[34px] lg:text-[38px] text-center mb-8">
        Product Categories
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-4 mb-12">
        {/* Solar AC - Full width on small screens, 50% on large screens */}
        <div className="w-full lg:w-1/2 rounded-[35px] relative overflow-hidden group hover:scale-105 transform transition-all duration-300">
          <Link href="/products/ac">
            <Image
              src="/images/acbanner.png"
              alt="AC Banner"
              className="w-full h-auto object-cover cursor-pointer"
              priority
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              width={500}
              height={500}
            />
            <h2 className="absolute bottom-6 left-6 text-3xl font-semibold text-white font-['Montserrat'] transition-all duration-300 group-hover:text-yellow-400">
              Solar Air Conditioner
            </h2>
          </Link>
        </div>

        {/* Right side container for 2x2 grid, full width on small screens */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          {/* Cooler */}
          <div className="rounded-[30px] relative overflow-hidden group hover:scale-105 transform transition-all duration-300">
            <Link href="/products/cooler">
              <Image
                src="/images/cooler.png"
                alt="Cooler"
                className="w-full h-auto object-cover"
                width={500}
                height={500}
                priority
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
              <h3 className="absolute bottom-6 left-6 text-lg font-bold text-white font-['Montserrat'] transition-all duration-300 group-hover:text-yellow-400">
                Cooler
              </h3>
            </Link>
          </div>

          {/* Speaker */}
          <div className="rounded-[30px] relative overflow-hidden group hover:scale-105 transform transition-all duration-300">
            <Link href="/products/speaker">
              <Image
                src="/images/speaker.png"
                alt="Speaker"
                className="w-full h-auto object-cover"
                priority
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
                width={500}
                height={500}
              />
              <h3 className="absolute bottom-6 left-6 text-lg font-bold text-white font-['Montserrat'] transition-all duration-300 group-hover:text-yellow-400">
                Speaker
              </h3>
            </Link>
          </div>

          {/* Smart Watch */}
          <div className="rounded-[30px] relative overflow-hidden group hover:scale-105 transform transition-all duration-300">
            <Link href="/products/smartWatch">
              <Image
                src="/images/smartwatch.png"
                alt="Smart Watch"
                className="w-full h-auto object-cover"
                priority
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
                width={500}
                height={500}
              />
              <h3 className="absolute bottom-6 left-6 text-lg font-bold text-white font-['Montserrat'] transition-all duration-300 group-hover:text-yellow-400">
                Smart Watch
              </h3>
            </Link>
          </div>

          {/* Washing Machine */}
          <div className="rounded-[30px] relative overflow-hidden group hover:scale-105 transform transition-all duration-300">
            <Link href="/products/washingMachine">
              <Image
                src="/images/washingmachine.png"
                alt="Washing Machine"
                className="w-full h-auto object-cover"
                priority
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
                width={500}
                height={500}
              />
              <h3 className="absolute bottom-6 left-6 text-lg font-bold text-white font-['Montserrat'] transition-all duration-300 group-hover:text-yellow-400">
                Washing Machine
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
