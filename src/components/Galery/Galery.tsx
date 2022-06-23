import { MouseEvent, useReducer, useState } from "react";
import cn from "classnames";
import { GaleryProps } from "./Galery.props";
import styles from "./Galery.module.css";
import { useFilterableData } from "../../hooks/useFilterableData";
import { getCategory } from "../../utils/utils";
import { Button, Card } from "..";
import { ActionKind, DataReducer, initialState } from "../../store/reduser";
import { SomeDataI } from "../../pages/main/main";
import { data } from "../../data/mockData";
import { Select } from "../Select/Select";

export const Galery = ({}: GaleryProps): JSX.Element => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  const [currentItem, setCurrentItem] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState("all");
  const { filterItems } = useFilterableData(state, "category", currentCategory);

  const handleClick = (e: MouseEvent, category: string) => {
    if (!category) {
      setCurrentCategory("all");
    } else {
      setCurrentCategory(category);
    }
  };

  const loadNewItems = (e: MouseEvent) => {
    dispatch({
      type: ActionKind.Add,
      payload: data.map((el, i, arr) => {
        return Object.assign(
          {},
          { ...el, title: `${el.title.split("-")[0]}-${state.length + i}` }
        );
      }),
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.filterSelect}>
        <Select options={["Show All", ...getCategory(state)]} />
      </div>

      <ul className={styles.filterList}>
        <li className={styles.filterItem}>
          <button
            className={cn(styles.filterButton, {
              [styles.active]: currentCategory === "all",
            })}
            onClick={(e: MouseEvent) => handleClick(e, "")}
          >
            Show All
          </button>
        </li>
        {getCategory(state).map((category, i) => (
          <li key={category} className={styles.filterItem}>
            <button
              className={cn(styles.filterButton, {
                [styles.active]: currentCategory === category,
              })}
              onClick={(e: MouseEvent) => handleClick(e, category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      <ul className={styles.galeryList}>
        {filterItems.map((el, index) => (
          <li key={`${el.title}-${index}`} className={styles.galeryItem}>
            <Card
              title={el.title}
              category={el.category}
              imageUrl={el.imageUrl}
            />
          </li>
        ))}
      </ul>
      <div className={styles.buttonWrapper}>
        <Button
          variant="contained"
          color="white"
          className={styles.loadButton}
          onClick={loadNewItems}
        >
          Load more
        </Button>
      </div>
    </section>
  );
};
