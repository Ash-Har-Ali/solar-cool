import Image from 'next/image';
import styles from '../styles/about.module.css';
import solarCoolLogo1 from "../../public/images/solarcool-logo.png";
import banner from "../../public/images/banner1.png";

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.banner}>
        <Image
          src={banner}
          alt="Banner"
          width={1440}
          height={816}
          className={styles.bannerImage}
        />
        <div className={styles.aboutUsTitle}>About Us</div>
        <div className={styles.aboutUsDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.sectionTitle}>About Us</div>
        <div className={styles.subTitle}>Who we are?</div>
        <div className={styles.subTitle}>What Makes Us Different?</div>
        <div className={styles.textContent}>
          “Solar cool” is established to bring solar products to everyone’s daily life with modern technology at an
          affordable cost and high efficiency with lower electricity bills. Now your selection of Eco-Friendly solar
          products could help the planet and unlock a wide range of healthy advantages. We take a closer look at how
          the latest Solar technology is transforming your home and office spaces, introducing our wide range of Solar
          Air Conditioners, Inverter Water Geysers, Solar Refrigerators, Solar Deep Freezers, and Ceiling Fans. This
          marks a new starting point for the next generation of air-conditioners with immense potential to disrupt
          traditional air-conditioning methods.
        </div>
        <div className={styles.rectangle85} />
        <Image
          src={solarCoolLogo1}
          alt="Solar Cool Logo"
          width={345}
          height={255.25}
          className={styles.logoImage}
        />

        <div className={styles.rectangle86} />
        <div className={styles.vision}>Vision</div>
        <div className={styles.rectangle87} />
        <div className={styles.mission}>Mission</div>
        <div className={styles.textBox}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </div>
      </div>
    </div>
  );
}
