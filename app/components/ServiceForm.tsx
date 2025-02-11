import React, { useState } from "react";
import emailjs from "emailjs-com";

const ServiceForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    description: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validation function
  const validateForm = () => {
    let valid = true;
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }
    if (!formData.phone.match(/^\d{10}$/)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
      valid = false;
    }
    if (!formData.location.trim()) {
      newErrors.location = "Location is required.";
      valid = false;
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    emailjs
      .sendForm("service_jkgdf3g", "template_nfkwjbs", e.target as HTMLFormElement, "F713CPEpKwNIJ5iRc")
      .then(() => {
        setIsSubmitted(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setErrors({ form: "There was an error sending your request. Please try again later." });
        setLoading(false);
      });
  };

  return (
    <div className="w-full container mx-auto px-14 py-4 mt-10 border border-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-left mb-6">Service Request</h2>

      {isSubmitted ? (
        <div className="text-center">
          <p className="text-lg text-green-600">Your request has been submitted!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          {[
            { id: "name", type: "text", label: "Name" },
            { id: "email", type: "email", label: "Email" },
            { id: "phone", type: "tel", label: "Phone Number" },
            { id: "location", type: "text", label: "Location" },
          ].map(({ id, type, label }) => (
            <div key={id} className="relative">
              <input
                type={type}
                id={id}
                name={id}
                value={formData[id as keyof typeof formData]}
                onChange={handleChange}
                className={`peer w-full px-4 py-3 border font-['Montserrat'] rounded-xl shadow-lg focus:ring-solarcoolgreen focus:border-solarcoolgreen outline-none ${
                  errors[id] ? "border-red-500" : "border-[#878787]"
                }`}
                required
              />
              <label
                htmlFor={id}
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-[#878787] text-base transition-all 
                  ${formData[id as keyof typeof formData] ? "hidden" : "peer-focus:top-2 peer-focus:text-xs peer-focus:text-solarcoolgreen"}`}
              >
                {label}
              </label>
              {errors[id] && <p className="text-red-500 text-xs mt-1">{errors[id]}</p>}
            </div>
          ))}

          {/* Floating Label Textarea */}
          <div className="relative">
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={`peer w-full px-4 py-10 border rounded-xl shadow-lg focus:ring-solarcoolgreen focus:border-solarcoolgreen outline-none ${
                errors.description ? "border-red-500" : "border-[#878787]"
              }`}
              required
            />
            <label
              htmlFor="description"
              className={`absolute left-4 top-4 text-[#878787] text-base transition-all 
                ${formData.description ? "hidden" : "peer-focus:top-2 peer-focus:text-xs peer-focus:text-solarcoolgreen"}`}
            >
              Description
            </label>
            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
          </div>

          {/* Error Message */}
          {errors.form && <p className="text-red-500 text-sm text-center">{errors.form}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 bg-solarcoolgreen text-white rounded-full transition ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-solarcoolgreen/80"
            }`}
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ServiceForm;
