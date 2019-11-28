import React, { Fragment } from "react";
import styles from "./TodoApp.module.css";

const ToggleAll = () => {
  return (
    <Fragment>
      <input id="toggle-all" className={styles.toggleAll} type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </Fragment>
  );
};

export default ToggleAll;
