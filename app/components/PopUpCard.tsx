import { useState, useEffect, ChangeEvent, FormEvent } from "react";

export default function PopUpCard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: ""
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // Show after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  // ✅ Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/submit-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        alert("Thank you! Your details have been submitted.");
        setIsOpen(false); // Close popup on success
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-4">
      <div className="bg-white rounded-xl shadow-lg w-96">
        <div className="bg-[#1C7940] text-white p-4 rounded-t-lg text-center">
          <div className="text-2xl font-semibold">📩</div>
          <h2 className="text-2xl font-bold py-2 font-['Montserrat']">
            Get Exclusive Updates <br />& Special Offers!
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="px-8 py-4">
          <p className="text-gray-700 text-base font-medium text-center mt-3 mb-5">
            Enter your details to receive the latest offers, expert tips, and
            updates on BLDC air conditioning.
          </p>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl mb-2 text-center font-medium"
            required
          />
          <input
            type="text"
            name="mobileNumber"
            placeholder="Phone Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl mb-2 text-center font-medium"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl mb-2 text-center font-medium"
            required
          />
          <div className="flex justify-between mb-4 mt-4">
            <button
              type="submit"
              className="bg-[#1C7940] text-white py-2 md:px-5 px-4 rounded-xl font-semibold"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Get Updates"}
            </button>
            <button
              type="button"
              className="bg-[#EDEDED] text-gray-700 py-2 md:px-6 px-5 rounded-xl font-semibold"
              onClick={() => setIsOpen(false)}
            >
              No, Thanks
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
