"use client";

import { FaMapPin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import bannerImage from "../../public/images/contact-banner.webp";

const contactDetails = [
  {
    icon: FaMapPin,
    title: "Solarcool",
    details: ["14/370A, Poyya, Kodungallur Rd", "Thrissur, Kerala Pin: 680733"]
  },
  {
    icon: FaEnvelope,
    title: "Support",
    details: ["info@solarcool.co.in", "enquiry@solarcool.co.in"],
    links: ["mailto:info@solarcool.co.in", "mailto:enquiry@solarcool.co.in"]
  },
  {
    icon: FaPhoneAlt,
    title: "Let’s Talk",
    details: ["+91 82818 98700", "+91 75108 08085"],
    links: ["tel:+918281898700", "tel:+917510808085"]
  }
];

const ContactInfo = () =>
  <div className="flex flex-col gap-6 items-center text-center">
    {contactDetails.map(({ icon: Icon, title, details, links }, index) =>
      <div key={index} className="flex flex-col items-center gap-2">
        <Icon size={24} className="text-[#006a33]" />
        <div className="text-lg font-semibold text-[#0169b3]">
          {title}
        </div>
        {details.map((detail, i) =>
          <div key={i} className="text-sm text-gray-800">
            {links
              ? <a href={links[i]} className="text-blue-600 hover:underline">
                  {detail}
                </a>
              : detail}
          </div>
        )}
      </div>
    )}
  </div>;

export default function ContactUsPage() {
  return (
    <div className="w-full bg-gray-100">
      {/* Banner Section */}
      <div className="relative w-full h-[816px]">
        <Image
          src="/images/contact-banner.webp"
          alt="Banner"
          className="w-full h-full object-cover"
          width={1920}
          height={816}
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
      <div className="w-full bg-[#e7e7e7]">
        <div className="container mx-auto px-6 sm:px-12 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 p-6 md:gap-0">
            <div className="w-full lg:w-2/3 h-[500px] 2xl:h-[600px] bg-white rounded-xl shadow-lg overflow-hidden md:rounded-r-none">
              <iframe
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Solarcool%2014/370A,%20Poyya,%20Kodungallur%20Rd%20Thrissur,%20Kerala%20Pin:%20680733+(Solar%20Cool)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              />
            </div>
            <div className="w-full lg:w-1/3 h-auto md:h-[500px] 2xl:h-[600px] bg-white rounded-xl shadow-lg p-8 flex justify-center items-center md:rounded-l-none">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
