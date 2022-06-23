import { useState } from "react";
import { ReactComponent as LogoIcon } from "../../assets/svg/logo.svg";
import { Button, Galery, Navbar } from "../../components";
import { NavbarItems } from "../../data/mockData";
import { NavbarItemI } from "../../interfaces/common";
import { getCategory } from "../../utils/utils";
import styles from "./main.module.css";
export interface SomeDataI {
  title: string;
  category: string;
  imageUrl: string;
}

export const Main = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <LogoIcon className={styles.logo} />
          <Navbar items={NavbarItems}></Navbar>
          <Button variant="outlined" className={styles.contactButton}>
            Contact
          </Button>
        </nav>
        <h1 className={styles.title}>Portfolio</h1>
        <span className={styles.subTitle}>
          Agency provides a full service range including technical skills,
          design, business understanding.
        </span>
      </header>
      <div className={styles.galery}>
        <Galery />
      </div>
    </div>
  );
};
