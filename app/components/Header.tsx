import Image from "next/image";
import solarCoolLogo1 from "../images/solarcool-logo.png";
import styles from "../styles/Header.module.css"; // Adjust the path as needed

export const Header = () => {
  return (
    <div className={styles["page-container"]}>
      <div className={styles["header-container"]}>
        <Image
          className={styles["header-logo"]}
          alt="Solar cool logo"
          src={solarCoolLogo1}
          width={165}
          height={54}
          priority
        />

        <div className={styles["nav-links"]}>
          <div className={`${styles["nav-link"]} ${styles["nav-link-home"]}`}>Home</div>
          <div className={`${styles["nav-link"]} ${styles["nav-link-about"]}`}>About</div>
          <div className={`${styles["nav-link"]} ${styles["nav-link-default"]}`}>Products</div>
          <div className={`${styles["nav-link"]} ${styles["nav-link-default"]}`}>Gallery</div>
          <div className={`${styles["nav-link"]} ${styles["nav-link-default"]}`}>Blogs</div>
          <div className={`${styles["nav-link"]} ${styles["nav-link-default"]}`}>Contact us</div>
        </div>

        <div className={styles["save-energy-btn"]}>
          <div className={styles["save-energy-text"]}>
            Save Energy Now!
          </div>
        </div>
      </div>
    </div>
  );
};
