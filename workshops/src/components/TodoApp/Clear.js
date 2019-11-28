import React from "react";

const Clear = props => {
  if (!props.isClearVisible) {
    return null;
  }
  return <button className={styles.clearCompleted}>Clear completed</button>;
};

export default Clear;
