import { useState, useEffect } from "react";

export default function PopUpCard() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // Show after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-lg w-96">
        <div className="bg-[#1C7940] text-white p-4 rounded-t-lg text-center">
          <div className="text-2xl font-semibold">📩</div>
          <h2 className="text-2xl font-bold py-2 font-['Montserrat']">
            Get Exclusive Updates <br />& Special Offers!
          </h2>
        </div>
        <p className="text-gray-700 text-base font-medium text-center mt-4 px-6 font-['Montserrat']">
          Enter your details to receive the latest offers, expert tips, and
          updates on BLDC air conditioning.
        </p>
        <div className="mt-4 px-8 py-2 text-center">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded-xl mb-2 text-center font-medium"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-2 border rounded-xl mb-2 text-center font-medium"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded-xl mb-2 text-center font-medium"
          />
        </div>
        <div className="flex justify-between px-8 mb-5">
          <button className="bg-[#1C7940] text-white py-2 px-5 rounded-xl font-semibold">
            Get Updates
          </button>
          <button
            className="bg-[#EDEDED] text-gray-700 py-2 px-6 rounded-xl font-semibold"
            onClick={() => setIsOpen(false)}
          >
            No, Thanks
          </button>
        </div>
      </div>
    </div>
  );
}
