import Image from "next/image";
import banner from "../../public/images/banner4.png";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative mb-12">
        <Image
          src={banner}
          alt="Banner"
          className="w-full h-auto object-cover"
          priority
        />
        <div className="absolute left-8 md:left-16 top-[30%] md:top-[40%] text-white text-4xl md:text-6xl font-bold font-['Montserrat']">
          Our Services
        </div>
      </div>
      



    </div>
  );
};

export default HomePage;
