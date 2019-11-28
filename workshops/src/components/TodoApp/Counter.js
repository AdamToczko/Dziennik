import React from "react";
import { connect } from "react-redux";
import styles from "./TodoApp.module.css";
import { selectTodosLeft } from "../../redux/todos";

const Counter = props => {
  return (
    <span className={styles.todoCount}>
      <strong>{props.itemsLeft}</strong> item{props.itemsLeft !== 1 && "s"} left
    </span>
  );
};

const mapStateToProps = state => {
  return {
    itemsLeft: selectTodosLeft(state)
  };
};

export default connect(mapStateToProps)(Counter);
