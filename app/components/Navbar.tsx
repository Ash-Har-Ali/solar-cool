"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Logo from '../../public/images/solarcool-logo.png';

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/aboutUs" },
  { title: "Products", path: "/products" },
  { title: "Services", path: "/services" },
  { title: "Gallery", path: "/gallery" },
  { title: "Blogs", path: "/blog" },
  { title: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 my-4 md:mx-24 mx-4 border border-white border-opacity-30 bg-[#f2f2f2] rounded-[3rem] px-4 py-2 sm:py-1">
      <div className="flex container items-center justify-between mx-auto px-4 py-2 sm:py-0.5">
        {/* Left Side: Logo */}
        <Link href="/" className="text-2xl md:text-3xl text-black font-semibold">
          <Image src={Logo} alt="Solar Cool" className="h-12 md:h-16 w-auto" />
        </Link>

        {/* Center: Navigation Links (hidden on mobile) */}
        <div className="hidden xl:flex space-x-8 justify-center flex-grow">
        {navLinks.map((link, index) => (
            <NavLink key={index} href={link.path} title={link.title} />
          ))}
        </div>

        <div className="flex items-center">
          {/* Right Side: CTA Button (hidden on mobile) */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-4 inline-block py-4 w-full sm:w-fit rounded-full mr-4 border border-white border-opacity-40 bg-[#036d39] text-white hover:bg-gray-800 transition text-sm sm:text-base"
            >
              Save Energy Now!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="text-white focus:outline-none"
            >
              {!navbarOpen ? (
                <Bars3Icon className="h-6 w-6 text-[#036d39]" />
              ) : (
                <XMarkIcon className="h-6 w-6 text-[#036d39]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
