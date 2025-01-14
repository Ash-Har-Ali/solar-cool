'use client';

import { useState } from 'react';
import styles from '../styles/ContactUs.module.css';
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
  <div className={styles.contactInfoContainer}>
    <div className={styles.contactInfoItem}>
      <div className={styles.contactInfoTitle}>Solarcool</div>
      <div className={styles.contactInfoText}>14/370A, Poyya, Kodungallur Rd Thrissur, Kerala Pin: 680733</div>
    </div>
    <div className={styles.contactInfoItem}>
      <div className={styles.contactInfoTitle}>Support</div>
      <div className={styles.contactInfoText}>info@solarcool.co.in</div>
      <div className={styles.contactInfoText}>enquiry@solarcool.co.in</div>
    </div>
    <div className={styles.contactInfoItem}>
      <div className={styles.contactInfoTitle}>Let’s Talk</div>
      <div className={styles.contactInfoText}>+91 82818 98700</div>
      <div className={styles.contactInfoText}>+91 75108 08085</div>
    </div>
  </div>
);

export default function ContactUsPage() {
  return (
    <div className={styles.contactUsPage}>
      {/* Banner Section */}
      <div className={styles.banner}>
        <div className={styles.bannerOverlay} />
        <div className={styles.bannerTitleContainer}>
          <div className={styles.bannerTitle}>Contact Us</div>
        </div>
        <div className={styles.contactFormContainer}>
          {/* Contact Form Section */}
          <div className={styles.formContent}>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <div className={styles.contactInfoSection}>
            <FaMapPin size={20} color="#006a33" />
            <ContactInfo />
          </div>
          <div className={styles.mapImage} />
        </div>
      </div>
    </div>
  );
}
