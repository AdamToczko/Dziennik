import React from "react";
import { connect } from "react-redux";
import styles from "./TodoApp.module.css";
import { selectIsClearVisible } from "../../redux/todos";

const Clear = props => {
  if (!props.isClearVisible) {
    return null;
  }
  return <button className={styles.clearCompleted}>Clear completed</button>;
};

const mapStateToProps = state => {
  return {
    isClearVisible: selectIsClearVisible(state)
  };
};

export default connect(mapStateToProps)(Clear);
