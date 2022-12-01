import { forwardRef } from "react";
import styles from "./input.module.css";

const Input = forwardRef((props, ref) => {
  const { id } = props.input;
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
