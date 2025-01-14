import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "../styles/about.module.css";

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>About Us</h1>
        <p className={styles.heroDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Navbar */}
      {/* <div className={styles.navbar}>
        <Image
          src="/images/solarcool-logo.png"
          alt="Solar cool logo"
          width={165}
          height={54}
        />
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/contact">Contact us</Link>
        </div>
        <button className={styles.saveEnergyButton}>Save Energy Now!</button>
      </div> */}

      {/* About Us Content */}
      <div className={styles.aboutContent}>
        <h2>Who we are?</h2>
        <p>
          “Solar cool“ is established to bring solar products to everyone’s
          daily life with modern technology at an affordable cost. Our range of
          products includes Solar Air Conditioners, Inverter Water Geysers, and
          more.
        </p>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/solarcool-logo.png"
            alt="Solar cool logo"
            width={345}
            height={255}
            className={styles.aboutImage}
          />
        </div>
      </div>

      {/* Vision and Mission */}
      <div className={styles.visionMission}>
        <div className={styles.card}>
          <h3>Vision</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Mission</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <Image
            src="/images/solarcool-logo.png"
            alt="Solar cool logo"
            width={255}
            height={87}
          />
          <address>
            14/370A, Poyya, Kodungallur Rd<br />
            Thrissur, Kerala Pin: 680733
          </address>
          <p>
            Email: info@solarcool.co.in | enquiry@solarcool.co.in<br />
            Phone: +91 82818 98700, +91 75108 08085
          </p>
        </div>
        <div className={styles.socialIcons}>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
        <p>&copy; 2025 | Solarcool.co.in</p>
      </footer> */}
    </div>
  );
};

export default AboutPage;
