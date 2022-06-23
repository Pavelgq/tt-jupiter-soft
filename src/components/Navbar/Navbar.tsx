import styles from "./Navbar.module.css";
import { NavbarProps } from "./Navbar.props";

export const Navbar = ({ items }: NavbarProps) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.title} className={styles.item}>
          <a href={item.link} className={styles.link}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

//TODO: Сделать navbar на мобильной версии (бургер меню? нет в макете)
