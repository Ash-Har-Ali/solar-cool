import { useState } from "react";

export default function PopUpCard() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    isOpen &&
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="bg-green-700 text-white p-4 rounded-t-lg text-center">
          <div className="text-2xl font-semibold">📩</div>
          <h2 className="text-lg font-bold">
            Get Exclusive Updates & Special Offers!
          </h2>
        </div>
        <p className="text-gray-700 text-sm text-center mt-3">
          Enter your details to receive the latest offers, expert tips, and
          updates on BLDC air conditioning.
        </p>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-2"
          />
        </div>
        <div className="flex justify-between mt-4">
          <button className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800">
            Get Updates
          </button>
          <button
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
            onClick={() => setIsOpen(false)}
          >
            No, Thanks
          </button>
        </div>
      </div>
    </div>
  );
}
