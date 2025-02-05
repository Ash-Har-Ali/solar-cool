import { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // For dropdown icon

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer branding, digital marketing, SEO, web design, UI/UX, and more.",
  },
  {
    question: "How can I contact you?",
    answer: "You can reach us via email at support@wizzyminds.com or through our contact page.",
  },
  {
    question: "Do you provide custom branding solutions?",
    answer: "Yes! We tailor branding strategies based on your business needs.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            <p
              className={`text-gray-700 overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"
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
