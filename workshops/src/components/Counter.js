import { connect } from "react-redux";
import React, { Component } from "react";
import styles from "./Counter.module.css";
import {
  increment,
  decrement,
  reset,
  selectCounter,
  add
} from "../redux/counter";

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
      <button className={styles.button} onClick={() => props.onAdd(5)}>
        +5
      </button>
      <button className={styles.button} onClick={props.onReset}>
        reset
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
    onDecrement: () => dispatch(decrement()),
    onReset: () => dispatch(reset()),
    onAdd: value => dispatch(add(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
