"use client";

import { useState } from "react";
import { FaMapPin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import bannerImage from "../../public/images/contact-banner.svg";

const ContactInfo = () => (
  <div className="flex flex-col gap-5">
    <div className="flex items-start gap-2">
      <FaMapPin size={20} color="#006a33" />
      <div>
        <div className="text-lg font-semibold text-blue-700">Solarcool</div>
        <div className="text-sm text-black">
          14/370A, Poyya, Kodungallur Rd<br /> Thrissur, Kerala Pin: 680733
        </div>
      </div>
    </div>
    <div className="flex items-start gap-2">
      <FaEnvelope size={20} color="#006a33" />
      <div>
        <div className="text-lg font-semibold text-blue-700">Support</div>
        <div className="text-sm text-black">info@solarcool.co.in</div>
        <div className="text-sm text-black">enquiry@solarcool.co.in</div>
      </div>
    </div>
    <div className="flex items-start gap-2">
      <FaPhoneAlt size={20} color="#006a33" />
      <div>
        <div className="text-lg font-semibold text-blue-700">Let’s Talk</div>
        <div className="text-sm text-black">+91 82818 98700</div>
        <div className="text-sm text-black">+91 75108 08085</div>
      </div>
    </div>
  </div>
);

export default function ContactUsPage() {
  return (
    <div className="w-full bg-gray-100">
      {/* Banner Section */}
      <div className="relative w-full h-[816px]">
        {/* Banner Image */}
        <Image
          src={bannerImage}
          alt="Banner"
          className="w-full h-full object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-green-800 bg-opacity-75" />
        {/* Text Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
          <h1 className="text-white text-3xl md:text-6xl font-bold">Contact Us</h1>
        </div>
        {/* Contact Form */}
        <div className="absolute top-1/4 right-4 md:right-10 w-[90%] md:w-auto">
          <ContactForm />
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-center p-4 lg:p-8">
        <div className="relative w-full lg:w-4/5 xl:w-3/5 h-[400px] lg:h-[600px] bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Map Image */}
          <div
            className="absolute top-0 left-0 w-full lg:w-1/2 h-full bg-cover bg-center"
            style={{ backgroundImage: "url(/path/to/map-image.jpg)" }}
          />
          {/* Contact Info */}
          <div className="relative lg:absolute lg:right-4 lg:top-10 lg:w-72 p-4 lg:p-6">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
