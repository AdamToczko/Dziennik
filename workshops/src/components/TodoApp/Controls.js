import React from "react";
import Counter from "./Counter";
import Clear from "./Clear";
import Filters from "./Filters";

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
