import React from "react";
import styles from "./TodoApp.module.css";

const Counter = props => {
  return (
    <span className={styles.todoCount}>
      <strong>{props.itemsLeft}</strong> item{props.itemsLeft !== 1 && "s"} left
    </span>
  );
};

export default Counter;
