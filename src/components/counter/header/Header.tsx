import type { ReactElement } from "react";
import styles from "./Header.module.scss";

const Header = (): ReactElement => {
  return (
    <header className={styles.header}>
      <h1>Astro & React App</h1>
    </header>
  );
};

export default Header;
