import type React from "react";
import { useState } from "react";
import styles from "./Counter.module.css";

const Counter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button className={styles.button} type="button" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
