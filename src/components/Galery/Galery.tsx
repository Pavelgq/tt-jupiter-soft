import { MouseEvent, useState } from "react";
import { GaleryProps } from "./Galery.props";
import styles from "./Galery.module.css";
import { useSortableData } from "../../hooks/useSortableData";
import { getCategory } from "../../utils/utils";
import { Card } from "..";

export const Galery = ({ data }: GaleryProps): JSX.Element => {
  const [currentItem, setCurrentItem] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState("all");
  const { filterItems } = useSortableData(data, "category", currentCategory);

  const handleClick = (e: MouseEvent, category: string): void => {
    if (!category) {
      setCurrentCategory("all");
    } else {
      setCurrentCategory(category);
    }
  };

  return (
    <section>
      <ul className={styles.filterList}>
        <li className={styles.filterItem}>
          <button
            className={styles.galeryButton}
            onClick={(e: MouseEvent) => handleClick(e, "")}
          >
            Show All
          </button>
        </li>
        {getCategory(data).map((category, i) => (
          <li key={category} className={styles.galeryItem}>
            <button
              className={styles.galeryButton}
              onClick={(e: MouseEvent) => handleClick(e, category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      <ul className={styles.galeryList}>
        {filterItems.map((el) => (
          <li key={el.title} className={styles.galeryItem}>
            <Card
              title={el.title}
              category={el.category}
              imageUrl={el.imageUrl}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
