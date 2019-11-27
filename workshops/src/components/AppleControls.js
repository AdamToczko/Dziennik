import React from "react";

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
      <button className={"apple-control-button"} onClick={props.onBite}>
        Bite
      </button>
      <button className={"apple-control-button"} onClick={props.onRot}>
        Rot
      </button>
    </div>
  );
};

export default AppleControls;
