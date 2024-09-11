import type { ReactElement } from "react";
import styles from "./Footer.module.scss";

const Footer = (): ReactElement => {
  return (
    <footer className={styles.footer}>
      <p>© 2021 Astro & React App</p>
    </footer>
  );
};

export default Footer;
