import cn from "classnames";
import { SelectProps } from "./Select.props";
import styles from "./Select.module.css";

export const Select = ({
  options,
  handleSelect,
  className,
  ...props
}: SelectProps) => {
  return (
    <div className={cn(styles.selectWrapper, className)} {...props}>
      <select
        className={styles.select}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          handleSelect(e.target.value)
        }
      >
        {options.map((el) => (
          <option key={el} className={styles.option} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};
