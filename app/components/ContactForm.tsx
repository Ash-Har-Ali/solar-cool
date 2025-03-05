import React, { useState } from 'react';

interface ContactFormProps {
  onSuccessMessage?: string;
  onErrorMessage?: string;
  apiEndpoint?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSuccessMessage = 'Your Response has been sent!',
  onErrorMessage = 'Error creating user.',
  apiEndpoint = '/api/submit-data',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    reasonForEnquire: '',
    requirement: '',
  });
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<typeof formData> = {};
    const phonePattern = /^\d{10}$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!phonePattern.test(formData.mobileNumber)) newErrors.mobileNumber = 'Enter a valid 10-digit mobile number.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _type: 'user', ...formData }),
      });
      const result = await response.json();

      if (response.ok) {
        setMessage({ text: onSuccessMessage, type: 'success' });
        setFormData({ name: '', email: '', mobileNumber: '', reasonForEnquire: '', requirement: '' });
      } else {
        setMessage({ text: result.message || onErrorMessage, type: 'error' });
      }
    } catch {
      setMessage({ text: 'An unexpected error occurred.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-96 max-w-full mx-auto px-6 py-6 mt-10 border border-white rounded-2xl shadow-lg bg-[#ffffff]">
      <h2 className="text-2xl font-bold text-left mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="w-full space-y-3">
        {(['name', 'email', 'mobileNumber', 'reasonForEnquire'] as const).map((field) => (
          <div key={field} className="relative">
            <input
              type={field === 'email' ? 'email' : 'text'}
              name={field}
              id={field}
              value={formData[field]}
              onChange={handleChange}
              className={`peer w-full px-4 py-2 border font-['Montserrat'] rounded-2xl outline-none ${
                errors[field] ? 'border-red-500' : 'border-[#878787]'
              }`}
            />
            <label
              htmlFor={field}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-[#878787] text-base transition-all ${
                formData[field] ? 'hidden' : 'peer-focus:top-2 peer-focus:text-xs peer-focus:text-green-500'
              }`}
            >
              {field.replace(/([A-Z])/g, ' $1').replace(/^\w/, (c) => c.toUpperCase())}
            </label>
            {errors[field] && <p className="text-red-500 text-xs mt-1">{errors[field]}</p>}
          </div>
        ))}
        <div className="relative">
          <textarea
            id="requirement"
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            className={`peer w-full px-4 py-10 border rounded-2xl shadow-lg outline-none ${
              errors.requirement ? 'border-red-500' : 'border-[#878787]'
            }`}
          />
          <label
            htmlFor="requirement"
            className={`absolute left-4 top-4 text-[#878787] text-base transition-all ${
              formData.requirement ? 'hidden' : 'peer-focus:top-2 peer-focus:text-xs peer-focus:text-green-500'
            }`}
          >
            Requirement
          </label>
        </div>
        {message && (
          <p
            className={`mt-5 p-3 rounded-lg text-sm ${
              message.type === 'success' ? 'bg-green text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {message.text}
          </p>
        )}
        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-3 bg-solarcoolgreen text-white rounded-full transition ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'
          }`}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
