import {
  MouseEvent,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";
import cn from "classnames";
import { GaleryProps } from "./Galery.props";
import styles from "./Galery.module.css";
import { useFilterableData } from "../../hooks/useFilterableData";
import { getCategory } from "../../utils/utils";
import { Button, Card } from "..";
import { ActionKind, DataReducer, initialState } from "../../store/reduser";
import { data } from "../../data/mockData";
import { Select } from "../Select/Select";

interface KeyboardEvent {
  key: string;
}

export const Galery = ({}: GaleryProps): JSX.Element => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  const [currentItem, setCurrentItem] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState("Show All");
  const { filterItems } = useFilterableData(state, "category", currentCategory);
  console.log(currentCategory);
  const handleDelete = useCallback(
    (ev: KeyboardEvent) => {
      if (ev.key === "Delete" && currentItem !== null) {
        dispatch({
          type: ActionKind.DeleteItem,
          payload: currentItem,
        });
      }
    },
    [currentItem]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleDelete, true);
    return () => {
      document.removeEventListener("keydown", handleDelete, true);
    };
  }, [handleDelete]);

  const handleClick = (category: string) => {
    if (!category) {
      setCurrentCategory("Show All");
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

  const handleSelect = (e: MouseEvent, name: string) => {
    if (currentItem !== name) {
      setCurrentItem(name);
    } else {
      setCurrentItem(null);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.filterSelect}>
        <Select
          options={["Show All", ...getCategory(state)]}
          handleSelect={handleClick}
        />
      </div>

      <ul className={styles.filterList}>
        <li className={styles.filterItem}>
          <button
            className={cn(styles.filterButton, {
              [styles.active]: currentCategory === "Show All",
            })}
            onClick={(e: MouseEvent) => handleClick("")}
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
              onClick={(e: MouseEvent) => handleClick(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      <ul className={styles.galeryList}>
        {filterItems.map((el, index) => (
          <li
            key={`${el.title}-${index}`}
            className={cn(styles.galeryItem, {
              [styles.activeCard]: currentItem === el.title,
            })}
          >
            <Card
              title={el.title}
              category={el.category}
              imageUrl={el.imageUrl}
              setTag={setCurrentCategory}
              onClick={(e) => handleSelect(e, el.title)}
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
