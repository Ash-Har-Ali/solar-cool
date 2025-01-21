import Image from "next/image";
import Link from "next/link";
import banner from "../../public/images/banner4.png";
import acbanner from "../../public/images/ac.svg";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative mb-12">
        <Image src={banner} alt="Banner" className="w-full h- object-cover" />
        <div className="absolute left-8 top-[30%] text-white text-4xl md:text-6xl font-bold font-['Montserrat']">
          Products
        </div>
        <div className="absolute left-8 top-[44%] text-white text-lg md:text-xl font-normal text-justifyfont-['Montserrat'] max-w-[40%]">
          Harness the power of the sun with innovative solar products that
          reduce your energy bills and support a sustainable future.
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 sm:px-12 py-8">
        <Link href="/products/ac" passHref>
          <Image
            src={acbanner}
            alt="AC Banner"
            className="w-full h-auto object-cover cursor-pointer"
          />
        </Link>
        
      </div>
    </div>
  );
};

export default HomePage;
