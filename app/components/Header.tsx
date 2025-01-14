"use client";  // Mark the component as a Client Component

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import the Link component from next/link
import solarCoolLogo1 from "../../public/images/solarcool-logo.png";
import styles from "../styles/Header.module.css"; // Import the styles

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className={styles.navbar}>
      {/* Background Rectangle */}
      <div className={styles.rectangle} />
      
      {/* Content Frame */}
      <div className={styles.frame}>
        {/* Logo */}
        <Image
          className={styles.logo}
          alt="Solar Cool logo"
          src={solarCoolLogo1}
          width={165}
          height={54}
        />

        {/* Hamburger Menu Icon for small screens */}
        <div 
          className={styles.hamburgerMenu} 
          onClick={toggleMenu} 
          aria-label="Toggle navigation menu"
        >
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
        </div>
        
        {/* Navigation Links */}
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ""}`}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/aboutUs" className={styles.navLinkAbout}>
            About
          </Link>
          <Link href="/products" className={styles.navLink}>
            Products
          </Link>
          <Link href="/gallery" className={styles.navLink}>
            Gallery
          </Link>
          <Link href="/blog" className={styles.navLink}>
            Blogs
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact us
          </Link>
          
          {/* Save Energy Button with Link */}
          <Link href="/contact" className={styles.saveEnergyBtn}>
            <div className={styles.saveEnergyText}>Save Energy Now!</div>
          </Link>
        </div>
      </div>

      {/* Backdrop when menu is open */}
      {isMenuOpen && <div className={styles.backdrop} onClick={toggleMenu}></div>}
    </div>
  );
};
