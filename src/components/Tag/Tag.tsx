import cn from "classnames";
import styles from "./Tag.module.css";
import { TagProps } from "./Tag.props";

export const Tag = ({ title, className }: TagProps): JSX.Element => {
  return <span className={cn(styles.tag, className)}>{title}</span>;
};
