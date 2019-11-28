import React from "react";
import { connect } from "react-redux";
import styles from "./TodoApp.module.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import ToggleAll from "./ToggleAll";
import Controls from "./Controls";
import AppleControls from "../AppleControls";
import { fetchTodos } from "../../redux/todos";

class TodoApp extends React.Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div>
        <section className={styles.todoapp}>
          <header className={styles.header}>
            <h1>todos</h1>
            <TodoInput />
          </header>
          <section className={styles.main}>
            <ToggleAll />
            <TodoList />
          </section>
          <Controls />
        </section>
        <footer className={styles.info}>
          <AppleControls />
          <p>Double-click to edit a todo</p>
          <p>
            Template by <a href="http://sindresorhus.com">Sindre Sorhus</a>
          </p>
          <p>
            Created by <a href="http://todomvc.com">you</a>
          </p>
          <p>
            Part of <a href="http://todomvc.com">TodoMVC</a>
          </p>
        </footer>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onMount: () => dispatch(fetchTodos())
  };
};

export default connect(null, mapDispatchToProps)(TodoApp);
