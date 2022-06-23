import cn from "classnames";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";

export const Button = ({
  variant = "contained",
  color = "inherit",
  className,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.contained]: variant === "contained",
          [styles.outlined]: variant === "outlined",
          [styles.inherit]: color === "inherit",
          [styles.primary]: color === "primary",
          [styles.white]: color === "white",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
