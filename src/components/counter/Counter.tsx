import { useState, type ReactElement } from "react";
import styles from "./Counter.module.scss";
import Button from "./button/Button";

type Props = {
  defaultCounter: number;
};

const Counter = ({ defaultCounter }: Props): ReactElement => {
  const [counter, setCounter] = useState<number>(defaultCounter);
  return (
    <div className={styles.box}>
      <h1>{counter}</h1>
      <Button counter={counter} setCounter={setCounter} />
    </div>
  );
};

export default Counter;
