'use client';

import { useState } from 'react';
import styles from '../styles/ContactForm.module.css';
import { FaWhatsapp, FaMapPin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Importing React Icons

interface ContactFormProps {
  onSuccessMessage?: string;
  onErrorMessage?: string;
  apiEndpoint?: string; // Allows customization of the API endpoint if needed
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
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name:</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="mobileNumber" className={styles.label}>Mobile Number:</label>
          <input type="text" name="mobileNumber" id="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required className={styles.input} />
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
      {message && <p className={`${styles.message} ${messageType === 'success' ? styles.successMessage : styles.errorMessage}`}>{message}</p>}
    </div>
  );
};

const ContactInfo = () => (
  <div className="Frame30 w-[252px] h-[246px] left-[29px] top-[13px] absolute flex-col justify-start items-start gap-[19px] inline-flex">
    <div className="Frame29 self-stretch h-[69px] flex-col justify-start items-start gap-[5px] flex">
      <div className="Solarcool self-stretch text-[#0169b3] text-xl font-semibold font-['Montserrat']">Solarcool</div>
      <div className="370aPoyyaKodungallurRdThrissurKeralaPin680733 self-stretch text-black text-base font-normal font-['Montserrat']">
        14/370A, Poyya, Kodungallur Rd Thrissur, Kerala Pin: 680733
      </div>
    </div>
    <div className="Frame28 h-[70px] flex-col justify-start items-start gap-[5px] flex">
      <div className="Support self-stretch text-[#0169b3] text-xl font-semibold font-['Montserrat']">Support</div>
      <div className="Frame17 self-stretch h-[41px] flex-col justify-start items-start gap-px flex">
        <div className="InfoSolarcoolCoIn self-stretch text-black text-base font-normal font-['Montserrat']">
          info@solarcool.co.in
        </div>
        <div className="EnquirySolarcoolCoIn self-stretch text-black text-base font-normal font-['Montserrat']">
          enquiry@solarcool.co.in
        </div>
      </div>
    </div>
    <div className="Frame27 h-[69px] flex-col justify-start items-start gap-[5px] flex">
      <div className="LetSTalk self-stretch text-[#0169b3] text-xl font-semibold font-['Montserrat']">Let’s Talk</div>
      <div className="918281898700917510808085 self-stretch text-black text-base font-normal font-['Montserrat']">
        +91 82818 98700
        <br />
        +91 75108 08085
      </div>
    </div>
  </div>
);

export default function ContactUsPage() {
  return (
    <div className="ContactUs w-[1440px] h-[2044px] relative bg-[#e7e7e7] overflow-hidden">
      {/* Banner Section */}
      <div className="Banner w-[1440px] h-[816px] left-0 top-0 absolute">
        <div className="Rectangle84 w-[1440px] h-[816px] left-0 top-0 absolute bg-[#006a33]/90" />
        <div className="Frame24 w-[380px] h-[87px] left-[188px] top-[408px] absolute flex-col justify-start items-start inline-flex">
          <div className="ContactUs text-white text-[71.09px] font-bold font-['Montserrat']">Contact Us</div>
        </div>
        <div className="Rectangle92 w-[525px] h-[592px] left-[728px] top-[182px] absolute bg-[#f0f0f0] rounded-[25px]" />
        
        {/* Contact Form Section */}
        <div className="FormContent w-[482px] h-[514px] left-[749px] top-[221px] absolute">
          <ContactForm />
        </div>
      </div>

      {/* Map Section */}
      <div className="Maps w-[1065px] h-[544px] left-[188px] top-[879px] absolute">
        <div className="Rectangle98 w-[1065px] h-[544px] left-0 top-0 absolute bg-white rounded-[25px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
        <div className="Group6 w-[281px] h-[259px] left-[630px] top-[136px] absolute">
          <FaMapPin size={20} color="#006a33" />
          <ContactInfo />
        </div>
        <div className="Image w-[525px] h-[544px] left-0 top-0 absolute rounded-tl-[25px] rounded-bl-[25px]" />
      </div>
    </div>
  );
}
