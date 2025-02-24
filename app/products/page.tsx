import Image from "next/image";
import Link from "next/link";

// Use string paths for SVGs stored in /public/images
const smartWatchImg = "/images/smart watch.svg";
const washingMachineImg = "/images/washing machine.svg";
const speakerImg = "/images/Speaker.svg";
const tvImg = "/images/television.svg";
const digitalSignageImg = "/images/signage.svg";
const coolerImg = "/images/cooler.svg";

// Define the props interface for ProductCard
interface ProductCardProps {
  imageSrc: string;
  altText: string;
  productName: string;
  link: string;
}

// ProductCard component using next/image
const ProductCard = ({ imageSrc, altText, productName, link }: ProductCardProps) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 group">
    <Link href={link} passHref>
      <div className="relative rounded-[5px] overflow-hidden cursor-pointer group-hover:scale-105 transform transition-all duration-300">
        <Image
          src={imageSrc}
          alt={altText}
          className="object-cover w-full h-full"
          width={150}
          height={100}
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
        <div className="absolute inset-0 flex items-end justify-start text-white text-base font-bold font-['Montserrat'] p-3 opacity-100 group-hover:opacity-100 transition-opacity duration-300">
          {productName}
        </div>
      </div>
    </Link>
  </div>
);

const HomePage = () => {
  return (
    <div>
      <div className="relative mb-12">
        <Image
          src="/images/banner4.png"
          alt="Banner"
          className="w-full h-auto object-cover"
          width={1920}
          height={1080}
          priority
        />
        <div className="container mx-auto px-6 sm:px-12 py-8 absolute inset-0 flex items-center text-white text-center text-3xl md:text-6xl font-bold font-['Montserrat']">
          Products
        </div>
      </div>

      <div className="relative px-4 justify-center items-center sm:px-20 py-8">
        <Link href="/products/ac" passHref>
          <div className="relative cursor-pointer">
            <Image
              src="/images/banner-ac.png"
              alt="AC Banner"
              className=" mx-auto px-4 sm:px-12 w-full sm:w-auto h-auto justify-center items-center object-cover mb-8 sm:mb-12"
              width={1920}
              height={1080}
              priority
            />
            <span className="container w-full mx-auto px-3 sm:px-12 absolute bottom-2 left-7 lg:left-20 text-white text-sm sm:text-lg md:text-3xl font-bold font-['Montserrat'] bg-black/50 py-1 sm:py-4 rounded-lg">
              Air Conditioner
            </span>
          </div>
        </Link>

        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-2">
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
