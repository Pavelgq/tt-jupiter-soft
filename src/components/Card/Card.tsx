import { CardProps } from "./Card.props";
import styles from "./Card.module.css";
import { Tag } from "../Tag/Tag";

export const Card = ({ category, title, imageUrl }: CardProps): JSX.Element => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} className={styles.image} alt={title} />
      <Tag title={category} className={styles.tag} />
      <h3 className={styles.cardTitle}>{title}</h3>
    </div>
  );
};
