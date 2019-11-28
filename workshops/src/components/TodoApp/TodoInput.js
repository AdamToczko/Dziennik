import React from "react";

const TodoInput = props => {
  return (
    <input
      className={styles.newTodo}
      placeholder="What needs to be done?"
      value={props.value}
      onKeyPress={event => {
        if (event.key === "Enter") {
          props.onTodoAdd();
        }
      }}
      onChange={event => {
        props.onValueChange(event.target.value);
      }}
      autoFocus
    />
  );
};

export default TodoInput;
