import React, { useEffect } from "react";
import styles from "./Counter.module.css";
import { useCounter } from "../hooks/useCounter";
import { useClock } from "../hooks/useClock";

const CounterFunctional = () => {
  const { count, decrement, increment, setCount } = useCounter();
  useClock(
    () => {
      increment();
    },
    1000,
    [count]
  );

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={decrement}>
        -1
      </button>
      <span className={styles.display}>{count}</span>
      <button className={styles.button} onClick={increment}>
        +1
      </button>
    </div>
  );
};

export default CounterFunctional;
