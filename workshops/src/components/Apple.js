import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./Apple.module.css";
import { selectApple, selectEatable } from "../redux/apple";

const Apple = props => {
  return (
    <div className={styles.container}>
      {props.hasWorm && (
        <div onClick={props.onRemoveWorm} className={styles.worm}>
          :)
        </div>
      )}
      {props.bites === 10 && <div className={styles.appleTail}></div>}
      <div
        onClick={props.onAppleClick}
        className={styles.apple}
        style={{
          height: props.bites * 20 + "px",
          width: `${props.bites * 20}px`,
          backgroundColor: props.isDirty ? "grey" : props.color,
          borderColor: props.isDirty ? "grey" : props.color
        }}
      ></div>
      {!props.isEatable && (
        <div className={styles.warning}>
          <p>
            Apple is not eatable. Please remove worm, clean and make sure apple
            exists. Remember: apple should be red!!!
          </p>
        </div>
      )}
    </div>
  );
};

Apple.defaultProps = {
  hasWorm: false,
  color: "green",
  bites: 1,
  isDirty: true,
  isEatable: false
};

Apple.propTypes = {
  bites: PropTypes.number,
  isEatable: PropTypes.bool
};

Apple.displayName = "MyApple";

const mapStateToProps = state => {
  console.log("Apple is:", selectApple(state));
  return {
    hasWorm: selectApple(state).hasWorm,
    color: selectApple(state).color,
    isDirty: selectApple(state).isDirty,
    bites: selectApple(state).size,
    isEatable: selectEatable(state)
  };
};

export default Apple;
