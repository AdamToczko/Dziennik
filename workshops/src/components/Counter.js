import { connect } from "react-redux";
import React, { Component } from "react";
import styles from "./Counter.module.css";
import { increment, decrement, selectCounter } from "../redux/counter";

function Counter(props) {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={props.onDecrement}>
        -1
      </button>
      <span className={styles.display}>{props.value || 0}</span>
      <button className={styles.button} onClick={props.onIncrement}>
        +1
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    value: selectCounter(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
