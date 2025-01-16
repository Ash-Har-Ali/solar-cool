

import Image from 'next/image';
import { FaHandshake, FaBullhorn, FaLaptop } from 'react-icons/fa';
import banner from "../public/images/banner1.png";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative mb-12">
        <Image
          src={banner}
          alt="Banner"
          className="w-full h- object-cover"
        />
        <div className="absolute left-8 top-[30%] text-white text-4xl md:text-6xl font-bold font-['Montserrat']">
          Welcome to Solar Cool
        </div>
        <div className="absolute left-8 top-[44%] text-white text-lg md:text-xl font-normal font-['Montserrat'] max-w-[80%]">
          Harness the power of the sun with innovative solar products that reduce your energy bills and support a sustainable future.
        </div>
      </div>

      {/* About Us Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
        <p className="text-base text-gray-700 text-center max-w-3xl mx-auto">
          Solar Cool is committed to bringing solar products to your daily life. We offer cutting-edge technology at affordable prices to help reduce electricity bills and promote a greener environment.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 px-4">
          <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg w-full md:w-1/3">
            <FaLaptop className="text-4xl text-[#048c46]" />
            <h3 className="mt-4 text-xl font-semibold">Solar Products</h3>
            <p className="mt-2 text-center text-gray-600">
              We provide efficient and eco-friendly solar products for your home or business.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg w-full md:w-1/3">
            <FaBullhorn className="text-4xl text-[#048c46]" />
            <h3 className="mt-4 text-xl font-semibold">Consulting Services</h3>
            <p className="mt-2 text-center text-gray-600">
              Our experts offer personalized consulting to guide you in adopting solar energy solutions.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg w-full md:w-1/3">
            <FaHandshake className="text-4xl text-[#048c46]" />
            <h3 className="mt-4 text-xl font-semibold">Customer Support</h3>
            <p className="mt-2 text-center text-gray-600">
              We provide reliable after-sales service to ensure your satisfaction with every purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Solar Cool. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

