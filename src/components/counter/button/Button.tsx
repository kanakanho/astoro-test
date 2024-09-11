import type { ReactElement } from "react";
import styles from "./Button.module.scss";

type Props = {
  counter: number;
  setCounter: (value: number) => void;
};

const Button = ({ counter, setCounter }: Props): ReactElement => {
  return (
    <button className={styles.button} type="button" onClick={() => setCounter(counter + 1)}>
      Increment
    </button>
  );
};

export default Button;
