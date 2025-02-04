import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import banner from "../../public/images/banner4.png";
import acbanner from "../../public/images/banner-ac.png";
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
  link: string;
}

// ProductCard component with typed props
const ProductCard = ({ imageSrc, altText, productName, link }: ProductCardProps) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
    <Link href={link} passHref>
      <div className="relative rounded-[5px] overflow-hidden cursor-pointer group">
        <Image
          src={imageSrc}
          alt={altText}
          className="object-cover w-full h-full"
          layout="responsive"
          width={255}
          height={255}
        />
        {/* Overlay for dark background effect */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Product name centered over the image */}
        <div className="absolute inset-0 flex items-end justify-start text-white text-base font-bold font-['Montserrat'] p-3">
          {productName}
        </div>
      </div>
    </Link>
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
        <div className="container mx-auto px-6 sm:px-12 py-8 absolute inset-0 flex items-center text-white text-center text-3xl md:text-6xl font-bold font-['Montserrat']">
          Products
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 justify-center items-center sm:px-12 py-8">
        <Link href="/products/ac" passHref>
          <Image
            src={acbanner}
            alt="AC Banner"
            layout="responsive"
            className="w-full sm:w-auto h-auto justify-center items-center object-cover cursor-pointer mb-8 sm:mb-12"
            priority
          />
        </Link>

        {/* Product Cards */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-8">
          {/* Individual Product Cards */}
          <ProductCard imageSrc={smartWatchImg} altText="Smart Watch" productName="Smart Watch" link="/products/smartWatch" />
          <ProductCard imageSrc={washingMachineImg} altText="Washing Machine" productName="Washing Machine" link="/products/washingMachine" />
          <ProductCard imageSrc={speakerImg} altText="Speaker" productName="Speaker" link="/products/speaker" />
          <ProductCard imageSrc={tvImg} altText="TV" productName="TV" link="/products/tv" />
          <ProductCard imageSrc={digitalSignageImg} altText="Digital Signage" productName="Digital Signage" link="/products/digitalSignage" />
          <ProductCard imageSrc={coolerImg} altText="Cooler" productName="Cooler" link="/products/cooler" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
