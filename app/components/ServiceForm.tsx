import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ServiceForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    description: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_jkgdf3g', 'template_nfkwjbs', e.target as HTMLFormElement, 'F713CPEpKwNIJ5iRc')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert(`There was an error sending your request: ${error.text}`);
      });
  };

  return (
    <div className="w-full container mx-auto px-4  py-4 mt-24 mb-12 p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-left mb-6">Service Request Form</h2>

      {isSubmitted ? (
        <div className="text-center">
          <p className="text-lg text-green-600">Your request has been submitted!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div>
            <label htmlFor="name" className="block text-base font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 shadow-lg border border-white rounded-md focus:ring-solarcoolgreen focus:border-solarcoolgreen"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-solarcoolgreen focus:border-solarcoolgreen"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-base font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-solarcoolgreen focus:border-solarcoolgreen"
              required
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-base font-medium text-gray-700">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-solarcoolgreen focus:border-solarcoolgreen"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-base font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-solarcoolgreen focus:border-solarcoolgreen"
              required
            />
          </div>

          <button type="submit" className="px-5 py-3 bg-solarcoolgreen text-white rounded-full hover:bg-solarcoolgreen/80 transition">
            Submit Request
          </button>
        </form>
      )}
    </div>
  );
};

export default ServiceForm;
