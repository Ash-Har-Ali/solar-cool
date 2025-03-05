import { useState } from "react";
import { PiPlusBold } from "react-icons/pi";

const faqs = [
  {
    question:
      "What are the cost savings of switching to Solarcool's trending appliances as compared to the traditional ones?",
    answer:
      "As compared to the traditional home/office appliances, Solarcool’s latest set of appliances uses the most modern BLDC technology and works with solar power sources as well. This results in reducing the power consumption by 70%.",
  },
  {
    question:
      "How long does it take to recoup the investment in BLDC appliances?",
    answer:
      "Just six months! Yes, it takes only six months to recoup the investment made in BLDC appliances, which is usually a bit higher compared to the traditional ones, due to the high amount required for the purchase of appliances and installation.",
  },
  {
    question:
      "How does a BLDC air conditioner work with solar power and is it effective on cloudy days?",
    answer:
      "A BLDC air conditioner works efficiently with solar power due to its energy-efficient design. It just needs a solar panel, inverter, and battery storage. On cloudy days, the battery storage or grid connection will help it be reliable.",
  },
  {
    question:
      "Do I need batteries or a backup power source for the BLDC appliances while using a solar power source?",
    answer:
      "Yes, battery storage is a must for the BLDC appliances to work on solar power sources. And the backup power source or a connected grid can help during cloudy days.",
  },
  {
    question:
      "Can a single BLDC air conditioner power my entire home cooling system?",
    answer:
      "No, a single BLDC air conditioner cannot power your entire home cooling system. The BLDC air conditioners, just like the traditional ones, are designed only to provide cooling for a specific area or room.",
  },
  {
    question: "What are the advantages of the BLDC technology?",
    answer:
      "In BLDC home and office appliances, there is no friction between the moving mechanical parts and starting power is very low. This helps in reducing the power consumption by a great extent.",
  },
];
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mb-12">
      <h2 className="text-[34px] font-semibold font-['Montserrat'] sm:text-[28px] md:text-[34px] lg:text-[38px]  text-center mb-1">
        Frequently Asked Questions
      </h2>
       <h4 className="text-lg font-normal text-center mb-10">
       Never wait a second to clarify your thoughts. Our expert team has got you covered!!
      </h4>

      <div className="space-y-4 bg-[#eeeded]  p-4 rounded-2xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center px-6 ">
              <h3 className="text-lg font-semibold py-1 ">{faq.question}</h3>
              <div className="pl-4">
                <PiPlusBold
                  className={`transition-transform duration-300 text-xl md:text-2xl font-extrabold ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
            <p
              className={`text-gray-700 overflow-hidden transition-all px-6 duration-300 ${
                openIndex === index
                  ? "max-h-40 mt-2 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
