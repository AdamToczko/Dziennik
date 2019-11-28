import React from "react";
import styles from "./TodoApp.module.css";

const Clear = props => {
  if (!props.isClearVisible) {
    return null;
  }
  return <button className={styles.clearCompleted}>Clear completed</button>;
};

export default Clear;
