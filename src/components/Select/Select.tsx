import cn from "classnames";
import { SelectProps } from "./Select.props";
import styles from "./Select.module.css";

export const Select = ({ options, className, ...props }: SelectProps) => {
  return (
    <div className={cn(styles.selectWrapper, className)} {...props}>
      <select className={styles.select}>
        {options.map((el) => (
          <option key={el} className={styles.option}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};
