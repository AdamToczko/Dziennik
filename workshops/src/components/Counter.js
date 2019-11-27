import React, { Component } from "react";
import styles from "./Counter.module.css";

class Counter extends Component {
  render() {
    return (
      <div className={styles.container}>
        <button className={styles.button} onClick={this.props.onDecrement}>
          -1
        </button>
        <span className={styles.display}>{this.props.value || 0}</span>
        <button className={styles.button} onClick={this.props.onIncrement}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
