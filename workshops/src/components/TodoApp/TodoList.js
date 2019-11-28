import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import styles from "./TodoApp.module.css";
import { selectTodos, removeTodo } from "../../redux/todos";

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
    todos: selectTodos(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteTodo: id => dispatch(removeTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
