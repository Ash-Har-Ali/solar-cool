"use client";

import { FaMapPin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import bannerImage from "../../public/images/contact-banner.svg";

const ContactInfo = () => (
  <div className="flex flex-col gap-6 items-center text-center">
    {[
      {
        icon: FaMapPin,
        title: "Solarcool",
        details: [
          "14/370A, Poyya, Kodungallur Rd",
          "Thrissur, Kerala Pin: 680733"
        ]
      },
      {
        icon: FaEnvelope,
        title: "Support",
        details: [
          <a
            key="email1"
            href="mailto:info@solarcool.co.in"
            className="text-blue-600 hover:underline"
          >
            info@solarcool.co.in
          </a>,
          <a
            key="email2"
            href="mailto:enquiry@solarcool.co.in"
            className="text-blue-600 hover:underline"
          >
            enquiry@solarcool.co.in
          </a>
        ]
      },
      {
        icon: FaPhoneAlt,
        title: "Let’s Talk",
        details: [
          <a
            key="phone1"
            href="tel:+918281898700"
            className="text-blue-600 hover:underline"
          >
            +91 82818 98700
          </a>,
          <a
            key="phone2"
            href="tel:+917510808085"
            className="text-blue-600 hover:underline"
          >
            +91 75108 08085
          </a>
        ]
      }
    ].map(({ icon: Icon, title, details }, index) => (
      <div key={index} className="flex flex-col items-center gap-2">
        <Icon size={24} className="text-[#006a33]" />
        <div className="text-lg font-semibold text-[#0169b3]">{title}</div>
        {details.map((line, i) => (
          <div key={i} className="text-sm text-gray-800">
            {line}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default function ContactUsPage() {
  return (
    <div className="w-full bg-gray-100">
      {/* Banner Section */}
      <div className="relative w-full h-[816px]">
        <Image
          src={bannerImage}
          alt="Banner"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-green-800 bg-opacity-75" />
        <div className="absolute inset-0 flex flex-col md:flex-row">
          <div className="flex-1 flex justify-center items-center pb-6 md:pb-0 md:w-1/2">
            <h1 className="text-white text-5xl sm:text-4xl md:text-6xl font-bold pt-20 md:pt-0">
              Contact Us
            </h1>
          </div>
          <div className="flex-1 flex justify-center items-center px-4 md:w-1/2">
            <div className="w-[90%] sm:w-auto pb-20 md:pb-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      {/* Map Section */}
      <div className="relative container mx-auto px-6 sm:px-12 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 p-6">
          <div className="w-full lg:w-2/3 h-[500px] bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Solarcool%2014/370A,%20Poyya,%20Kodungallur%20Rd%20Thrissur,%20Kerala%20Pin:%20680733+(Solar%20Cool)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
          <div className="w-full lg:w-1/3 h-auto bg-white rounded-xl shadow-lg p-8 flex justify-center items-center">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
