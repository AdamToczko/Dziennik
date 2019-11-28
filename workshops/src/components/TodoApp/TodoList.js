import React from "react";
import { connect } from "react-redux";
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

const mapStateToProps = state => {
  return {
    todos: [
      {
        id: 1,
        isDone: false,
        label: "Hello"
      }
    ]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteTodo: () => {
      console.log("DELETING TODO");
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
