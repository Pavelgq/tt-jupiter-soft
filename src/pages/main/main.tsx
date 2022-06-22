import { ReactComponent as LogoIcon } from "../../assets/svg/logo.svg";
import { Button, Galery, Navbar } from "../../components";
import { NavbarItemI } from "../../interfaces/common";
import { getCategory } from "../../utils/utils";
import styles from "./main.module.css";
export interface SomeDataI {
  title: string;
  category: string;
  imageUrl: string;
}

const data: SomeDataI[] = [
  {
    title: "SOFA",
    category: "Design",
    imageUrl: "/assets/image/sofa-1x.png",
  },
  {
    title: "SOFA",
    category: "Design",
    imageUrl: "/assets/image/sofa-1x.png",
  },
  {
    title: "SOFA",
    category: "Design",
    imageUrl: "/assets/image/sofa-1x.png",
  },
  {
    title: "SOFA",
    category: "Design",
    imageUrl: "/assets/image/sofa-1x.png",
  },
  {
    title: "SOFA",
    category: "Design",
    imageUrl: "/assets/image/sofa-1x.png",
  },
  {
    title: "SOFA",
    category: "Design",
    imageUrl: "/assets/image/sofa-1x.png",
  },
  // {
  //   title: "Key Board",
  //   category: "Branding",
  //   imageUrl: "",
  // },
  // {
  //   title: "Work Media",
  //   category: "Illustration",
  //   imageUrl: "",
  // },
  // {
  //   title: "DDDone",
  //   category: "Motion",
  //   imageUrl: "",
  // },
  // {
  //   title: "Abstract",
  //   category: "Design",
  //   imageUrl: "",
  // },
  // {
  //   title: "HangP",
  //   category: "Branding",
  //   imageUrl: "",
  // },
  // {
  //   title: "Architect",
  //   category: "Motion",
  //   imageUrl: "",
  // },
  // {
  //   title: "CalC",
  //   category: "Design",
  //   imageUrl: "",
  // },
  // {
  //   title: "Sport",
  //   category: "Branding",
  //   imageUrl: "",
  // },
];

const NavbarItems: NavbarItemI[] = [
  {
    title: "About",
    link: "#",
  },
  {
    title: "Servises",
    link: "#",
  },
  {
    title: "Pricing",
    link: "#",
  },
  {
    title: "Blog",
    link: "#",
  },
];

export const Main = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <LogoIcon className={styles.logo} />
          <Navbar items={NavbarItems}></Navbar>
          <Button variant="outlined">Contact</Button>
        </nav>
        <h1 className={styles.title}>Portfolio</h1>
        <span className={styles.subTitle}>
          Agency provides a full service range including technical skills,
          design, business understanding.
        </span>
      </header>
      <div className={styles.galery}>
        <Galery data={data} />
      </div>
    </div>
  );
};
