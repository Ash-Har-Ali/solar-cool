import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import banner from "../../public/images/banner4.png";
import acbanner from "../../public/images/ac.svg";
import smartWatchImg from "../../public/images/smart watch.svg";
import washingMachineImg from "../../public/images/washing machine.svg";
import speakerImg from "../../public/images/Speaker.svg";
import tvImg from "../../public/images/television.svg";
import digitalSignageImg from "../../public/images/signage.svg";
import coolerImg from "../../public/images/cooler.svg";

// Define the props interface for ProductCard
interface ProductCardProps {
  imageSrc: StaticImageData | string;
  altText: string;
  productName: string;
}

// ProductCard component with typed props
const ProductCard = ({ imageSrc, altText, productName }: ProductCardProps) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
    <div className="relative h-64 rounded-[30px] overflow-hidden">
      <Image
        src={imageSrc}
        alt={altText}
        className="object-cover w-full h-full"
        layout="intrinsic"
        width={255}
        height={255}
      />
      <div className="absolute inset-x-4 bottom-4 text-white text-lg font-bold font-['Montserrat']">
        {productName}
      </div>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative mb-12">
        <Image
          src={banner}
          alt="Banner"
          className="w-full h-auto object-cover"
          layout="responsive"
          priority
        />
        <div className="absolute left-8 top-[30%] text-white text-4xl sm:text-5xl md:text-6xl font-bold font-['Montserrat']">
          Products
        </div>
        <div className="absolute left-8 top-[44%] sm:top-[48%] text-white text-lg sm:text-xl md:text-2xl font-normal text-justify font-['Montserrat'] max-w-[40%] sm:max-w-[50%] md:max-w-[60%]">
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
      layout="intrinsic"
      className="w-full sm:w-auto h-auto object-cover cursor-pointer mb-8 sm:mb-12"
      priority
    />
  </Link>



        {/* Product Cards */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {/* Individual Product Cards */}
          <ProductCard
            imageSrc={smartWatchImg}
            altText="Smart Watch"
            productName="Smart Watch"
          />
          <ProductCard
            imageSrc={washingMachineImg}
            altText="Washing Machine"
            productName="Washing Machine"
          />
          <ProductCard
            imageSrc={speakerImg}
            altText="Speaker"
            productName="Speaker"
          />
          <ProductCard
            imageSrc={tvImg}
            altText="TV"
            productName="TV"
          />
          <ProductCard
            imageSrc={digitalSignageImg}
            altText="Digital Signage"
            productName="Digital Signage"
          />
          <ProductCard
            imageSrc={coolerImg}
            altText="Cooler"
            productName="Cooler"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
