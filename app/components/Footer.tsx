// components/Footer.tsx

'use client';

import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "../styles/Footer.module.css";
import Image from 'next/image'; // Correct import for Next.js
import solarCoolLogo1 from "../images/solarcool-logo.png";
import CTAButton from '../components/CTAButton';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo Row */}
        <div className={styles.logoRow}>
          <Image
            className={styles["header-logo"]}
            alt="Solar cool logo"
            src={solarCoolLogo1}
            width={255}
            height={87}
            priority
          />
          <CTAButton 
            label="Contact Us" 
            navigateTo="/contact"  // Page to navigate to
            bgColor="#fff" 
            textColor="#000" 
            width="auto" 
            // Set your icon URL here
          />
        </div>

        {/* Footer Content Grid */}
        <div className={styles.gridContainer}>
          {/* Logo and Contact Info */}
          <div className={styles.logoContact}>
            <p className={styles.text}>14/370A, Poyya, Kodungallur Rd</p>
            <p className={styles.text}>Thrissur, Kerala Pin: 680733</p>
            <p className={styles.text}>
              <a href="mailto:info@solarcool.co.in" className={styles.link}>
                info@solarcool.co.in
              </a>
            </p>
            <p className={styles.text}>
              <a href="tel:+918281898700" className={styles.link}>
                +91 82818 98700
              </a>
            </p>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.icon} aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className={styles.icon} aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className={styles.icon} aria-label="Facebook">
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>

          {/* Policies Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Our Policies</h3>
            <ul className={styles.list}>
              <li>
                <a href="#" className={styles.link}>
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Warranty Terms
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Air Cooler
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Smart Watch
                </a>
              </li>
            </ul>
          </div>

          {/* Products Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Products</h3>
            <ul className={styles.list}>
              <li>
                <a href="#" className={styles.link}>
                  Solar AC
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Television
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Washing Machines
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Air Cooler
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Smart Watch
                </a>
              </li>
            </ul>
          </div>

          {/* Additional Links Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Products</h3>
            <ul className={styles.list}>
              <li>
                <a href="#" className={styles.link}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                 Blog
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Products
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        <div className={styles.copyright}>
          Copyright © 2025 SolarCool Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
