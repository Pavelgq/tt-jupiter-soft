import cn from "classnames";
import styles from "./Tag.module.css";
import { TagProps } from "./Tag.props";

export const Tag = ({ title, className, ...props }: TagProps): JSX.Element => {
  return (
    <button className={cn(styles.tag, className)} {...props}>
      {title}
    </button>
  );
};
