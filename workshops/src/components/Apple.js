import React from "react";
import styles from "./Apple.module.css";

const Apple = () => {
  return (
    <div className={styles.container}>
      <div className={styles.worm}>:)</div>
      <div className={styles.appleTail}></div>
      <div className={styles.apple}></div>
    </div>
  );
};

export default Apple;
