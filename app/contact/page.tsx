'use client';

import { useState } from 'react';
import { FaWhatsapp, FaMapPin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

interface ContactFormProps {
  onSuccessMessage?: string;
  onErrorMessage?: string;
  apiEndpoint?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSuccessMessage = 'User created successfully!',
  onErrorMessage = 'Error creating user.',
  apiEndpoint = '/api/submit-data',
}) => {
  const [formData, setFormData] = useState({ name: '', email: '', mobileNumber: '' });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(onSuccessMessage);
        setMessageType('success');
        setFormData({ name: '', email: '', mobileNumber: '' });
      } else {
        setMessage(result.message || onErrorMessage);
        setMessageType('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setMessage('An unexpected error occurred.');
      setMessageType('error');
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-96 max-w-full">
      <h2 className="text-2xl font-bold mb-5">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number:</label>
          <input
            type="text"
            name="mobileNumber"
            id="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-1/3 bg-green-600 text-white py-2 px-6 font-semibold rounded-lg mt-5 hover:bg-green-700"
        >
          Submit
        </button>
      </form>
      {message && (
        <p
          className={`mt-5 p-3 rounded-lg text-sm ${
            messageType === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

const ContactInfo = () => (
  <div className="flex flex-col gap-5">
    <div className="flex flex-col gap-2">
      <div className="text-lg font-semibold text-blue-700">Solarcool</div>
      <div className="text-sm text-black">14/370A, Poyya, Kodungallur Rd Thrissur, Kerala Pin: 680733</div>
    </div>
    <div className="flex flex-col gap-2">
      <div className="text-lg font-semibold text-blue-700">Support</div>
      <div className="text-sm text-black">info@solarcool.co.in</div>
      <div className="text-sm text-black">enquiry@solarcool.co.in</div>
    </div>
    <div className="flex flex-col gap-2">
      <div className="text-lg font-semibold text-blue-700">Let’s Talk</div>
      <div className="text-sm text-black">+91 82818 98700</div>
      <div className="text-sm text-black">+91 75108 08085</div>
    </div>
  </div>
);

export default function ContactUsPage() {
  return (
    <div className="w-full bg-gray-100">
      {/* Banner Section */}
      <div className="relative w-full h-[816px]">
        <div className="absolute inset-0 bg-green-800 bg-opacity-90" />
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
          <div className="text-white text-6xl font-bold">Contact Us</div>
        </div>
        <div className="absolute top-1/4 right-10">
          <ContactForm />
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[544px] flex justify-center">
        <div className="relative w-full h-full bg-white rounded-2xl shadow-lg">
          <div className="absolute top-1/3 left-3/4 w-72 h-64 flex flex-col gap-3 p-4">
            <FaMapPin size={20} color="#006a33" />
            <ContactInfo />
          </div>
          <div
            className="absolute top-0 left-0 w-1/2 h-full bg-cover bg-center rounded-l-2xl"
            style={{ backgroundImage: 'url(/path/to/map-image.jpg)' }}
          />
        </div>
      </div>
    </div>
  );
}
