import React from "react";
import Counter from "./Counter";
import Clear from "./Clear";
import Filters from "./Filters";
import styles from "./TodoApp.module.css";

const Controls = () => {
  return (
    <footer className={styles.footer}>
      <Counter />
      <Filters />
      <Clear />
    </footer>
  );
};

export default Controls;
