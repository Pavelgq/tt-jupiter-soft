import { CardProps } from "./Card.props";
import styles from "./Card.module.css";
import { Tag } from "../Tag/Tag";

export const Card = ({
  category,
  title,
  imageUrl,
  setTag,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div className={styles.card} {...props}>
      <img src={imageUrl} className={styles.image} alt={title} />
      <Tag
        title={category}
        className={styles.tag}
        onClick={() => setTag(category)}
      />
      <h3 className={styles.cardTitle}>{title}</h3>
    </div>
  );
};
