import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoApp.module.css";

const TodoList = props => {
  return (
    <ul className={styles.todoList}>
      {props.todos.map(todo => (
        <TodoItem key={todo.id} {...todo} onDeleteTodo={props.onDeleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
