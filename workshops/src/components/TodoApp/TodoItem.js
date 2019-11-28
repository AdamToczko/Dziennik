import React from "react";
import styles from "./TodoApp.module.css";

const TodoItem = props => {
  const { isDone, label, id } = props;

  return (
    <li className={isDone ? styles.completed : ""}>
      <div className={styles.view}>
        <input
          className={styles.toggle}
          type="checkbox"
          checked={isDone}
          readOnly
        />
        <label>{label}</label>
        <button
          className={styles.destroy}
          onClick={() => props.onDeleteTodo(id)}
        ></button>
      </div>
      <input
        className={styles.edit}
        value="Create a TodoMVC template"
        readOnly
      />
    </li>
  );
};

export default TodoItem;
