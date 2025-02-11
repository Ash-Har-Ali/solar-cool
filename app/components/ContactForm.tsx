import React, { useState } from 'react';

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
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', mobileNumber: '' });

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', mobileNumber: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      valid = false;
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Enter a valid email.';
      valid = false;
    }
    if (!formData.mobileNumber.match(/^\d{10}$/)) {
      newErrors.mobileNumber = 'Enter a valid 10-digit mobile number.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error on input change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-96 max-w-full">
      <h2 className="text-2xl font-bold mb-5">Contact Us</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border rounded-lg ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border rounded-lg ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
            Mobile Number:
          </label>
          <input
            type="text"
            name="mobileNumber"
            id="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            pattern="\d{10}"
            className={`w-full px-4 py-2 border rounded-lg ${
              errors.mobileNumber ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.mobileNumber && <p className="text-red-500 text-xs mt-1">{errors.mobileNumber}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-1/3 bg-[#15722a] text-white py-2 px-6 font-semibold rounded-lg mt-5 ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'
          }`}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {message && (
        <p
          aria-live="polite"
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

export default ContactForm;
