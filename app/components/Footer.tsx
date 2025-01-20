'use client';

import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js
import solarCoolLogo1 from "../../public/images/solarcool-logo.png";
import CTAButton from '../components/CTAButton';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t-2 border-green-600 pt-8">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Logo Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Image
            className="w-60 h-20"
            alt="Solar cool logo"
            src={solarCoolLogo1}
            priority
          />
          <CTAButton 
            label="Contact Us" 
            navigateTo="/contact"
            bgColor="#fff" 
            textColor="#000" 
            width="auto" 
          />
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div>
            <p className="mt-2 text-sm text-gray-600">14/370A, Poyya, Kodungallur Rd</p>
            <p className="mt-2 text-sm text-gray-600">Thrissur, Kerala Pin: 680733</p>
            <p className="mt-2 text-sm text-gray-600">
              <Link href="mailto:info@solarcool.co.in" className="text-gray-600 hover:underline">
                info@solarcool.co.in
              </Link>
            </p>
            <p className="mt-2 text-sm text-gray-600">
              <Link href="tel:+918281898700" className="text-gray-600 hover:underline">
                +91 82818 98700
              </Link>
            </p>
            <div className="mt-4 flex justify-start gap-4">
              <Link href="https://www.linkedin.com" className="text-gray-500 hover:text-green-600" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} /> </Link>
              <Link href="https://www.instagram.com" className="text-gray-500 hover:text-green-600" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} /> </Link>
              <Link href="https://www.facebook.com" className="text-gray-500 hover:text-green-600" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={20} /> </Link>
            </div>
          </div>

          {/* Policies Section */}
          <div>
            <h3 className="text-sm font-bold text-gray-700">Our Policies</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:underline">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Warranty Terms</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Air Cooler</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Smart Watch</Link>
              </li>
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-sm font-bold text-gray-700">Products</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/products/ac" className="hover:underline">Solar AC</Link>
              </li>
              <li>
                <Link href="/products/tv" className="hover:underline">Television</Link>
              </li>
              <li>
                <Link href="/products/washingMachine" className="hover:underline">Washing Machines</Link>
              </li>
              <li>
                <Link href="/products/cooler" className="hover:underline">Air Cooler</Link>
              </li>
              <li>
                <Link href="/products/smartWatch" className="hover:underline">Smart Watch</Link>
              </li>
            </ul>
          </div>

          {/* Additional Links Section */}
          <div>
            <h3 className="text-sm font-bold text-gray-700">Additional Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/aboutUs" className="hover:underline">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Contact Us</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">Blog</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline">Gallery</Link>
              </li>
              <li>
                <Link href="/products" className="hover:underline">Products</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-sm text-white bg-green-800 py-2 px-3">
        Copyright © 2025 SolarCool Inc.
      </div>
    </footer>
  );
};

export default Footer;
