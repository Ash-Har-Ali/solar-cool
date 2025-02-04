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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jkgdf3g",
        "template_nfkwjbs",
        e.target as HTMLFormElement,
        "F713CPEpKwNIJ5iRc"
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert(`There was an error sending your request: ${error.text}`);
      });
  };

  return (
    <div className="w-full container mx-auto px-14 py-4 mt-10 border border-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-left mb-6">Service Request</h2>

      {isSubmitted ? (
        <div className="text-center">
          <p className="text-lg text-green-600">
            Your request has been submitted!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          {/* Floating Label Input Fields */}
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
                className="peer w-full px-4 py-3 border border-[#878787] font-['Montserrat'] rounded-xl shadow-lg focus:ring-solarcoolgreen focus:border-solarcoolgreen outline-none"
                required
              />
              {/* Label that disappears when input is filled */}
              <label
                htmlFor={id}
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-[#878787] text-base transition-all 
                  ${formData[id as keyof typeof formData] ? "hidden" : "peer-focus:top-2 peer-focus:text-xs peer-focus:text-solarcoolgreen"}`}
              >
                {label}
              </label>
            </div>
          ))}

          {/* Floating Label Textarea */}
          <div className="relative">
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="peer w-full px-4 py-10 border border-[#878787] rounded-xl shadow-lg focus:ring-solarcoolgreen focus:border-solarcoolgreen outline-none"
              required
            />
            {/* Label that disappears when textarea is filled */}
            <label
              htmlFor="description"
              className={`absolute left-4 top-4 text-[#878787] text-base transition-all 
                ${formData.description ? "hidden" : "peer-focus:top-2 peer-focus:text-xs peer-focus:text-solarcoolgreen"}`}
            >
              Description
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 bg-solarcoolgreen text-white rounded-full hover:bg-solarcoolgreen/80 transition"
          >
            Submit Request
          </button>
        </form>
      )}
    </div>
  );
};

export default ServiceForm;
