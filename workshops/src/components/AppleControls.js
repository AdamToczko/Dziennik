import React from "react";
import { connect } from "react-redux";
import { bite, rot, grow, removeWorm, addWorm, clean } from "../redux/apple";

const AppleControls = props => {
  return (
    <div>
      <button className={"apple-control-button"} onClick={props.onWash}>
        Wash
      </button>
      <button className={"apple-control-button"} onClick={props.onAddWorm}>
        Add worm
      </button>
      <button className={"apple-control-button"} onClick={props.onRemoveWorm}>
        Remove worm
      </button>
      <button className={"apple-control-button"} onClick={props.onGrow}>
        Grow
      </button>
      <button
        className={"apple-control-button"}
        onClick={() => props.onBite(1)}
      >
        Bite
      </button>
      <button className={"apple-control-button"} onClick={props.onRot}>
        Rot
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  onBite: bite,
  onRot: rot,
  onGrow: grow,
  onRemoveWorm: removeWorm,
  onAddWorm: addWorm,
  onWash: clean
};

export default connect(null, mapDispatchToProps)(AppleControls);
