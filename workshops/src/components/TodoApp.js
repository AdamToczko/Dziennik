import React, { Fragment } from "react";
import uuid from "uuid";
import styles from "./TodoApp.module.css";
import { todos } from "../data";
import AppleControls from "./AppleControls";

const Counter = props => {
  return (
    <span className={styles.todoCount}>
      <strong>{props.itemsLeft}</strong> item{props.itemsLeft !== 1 && "s"} left
    </span>
  );
};

const Clear = props => {
  if (!props.isClearVisible) {
    return null;
  }
  return <button className={styles.clearCompleted}>Clear completed</button>;
};

const Filters = props => {
  const filters = ["all", "active", "completed"];

  return (
    <ul className={styles.filters}>
      {filters.map(filter => {
        return (
          <li key={filter} onClick={() => props.onFilterChange(filter)}>
            <a
              href={`#/${filter}`}
              className={props.activeFilter === filter ? styles.selected : null}
            >
              {filter}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const Controls = props => {
  return (
    <footer className={styles.footer}>
      <Counter itemsLeft={props.itemsLeft} />
      <Filters
        activeFilter={props.selectedFilter}
        onFilterChange={props.onFilterChange}
      />
      <Clear isClearVisible={props.isClearVisible} />
    </footer>
  );
};

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

const TodoList = props => {
  return (
    <ul className={styles.todoList}>
      {props.todos.map(todo => (
        <TodoItem key={todo.id} {...todo} onDeleteTodo={props.onDeleteTodo} />
      ))}
    </ul>
  );
};

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

const ToggleAll = () => {
  return (
    <Fragment>
      <input id="toggle-all" className={styles.toggleAll} type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </Fragment>
  );
};

class TodoApp extends React.Component {
  state = {
    todos,
    selectedFilter: "completed",
    newTodoValue: "Buy milk"
  };

  componentDidMount() {
    // const todos = JSON.parse(localStorage.getItem("todos")) || [];
    // this.setState({
    //   todos
    // });
  }

  componentDidUpdate() {
    // localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  get todosLeft() {
    return this.state.todos.filter(todo => todo.isDone === false).length;
  }

  get isClearVisible() {
    return this.visibleTodos.some(todo => todo.isDone === true);
  }

  get visibleTodos() {
    const { todos, selectedFilter } = this.state;

    if (selectedFilter === "all") {
      return todos;
    } else if (selectedFilter === "active") {
      return todos.filter(todo => !todo.isDone);
    } else if (selectedFilter === "completed") {
      return todos.filter(todo => todo.isDone);
    }
  }

  addTodo = () => {
    // [1, 2, 3] -> [4, 1, 2, 3]
    if (this.state.newTodoValue.length < 2) {
      return;
    }

    const newTodo = {
      id: uuid.v4(),
      isDone: false,
      label: this.state.newTodoValue
    };
    const newTodos = [newTodo, ...this.state.todos];
    this.setState({
      todos: newTodos,
      newTodoValue: ""
    });
  };

  deleteTodo = id => {
    console.log(id);
    // [1, 2, 3, 4, 5] -> [1, 2, 4, 5]
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: newTodos
    });
  };

  handleChange = newValue => {
    if (newValue.length > 40) {
      return;
    }

    this.setState({
      newTodoValue: newValue
    });
  };

  changeFilter = filter => {
    this.setState({
      selectedFilter: filter
    });
  };

  render() {
    return (
      <div>
        <section className={styles.todoapp}>
          <header className={styles.header}>
            <h1>todos</h1>
            <TodoInput
              value={this.state.newTodoValue}
              onTodoAdd={this.addTodo}
              onValueChange={this.handleChange}
            />
          </header>
          <section className={styles.main}>
            <ToggleAll />
            <TodoList
              todos={this.visibleTodos}
              onDeleteTodo={this.deleteTodo}
            />
          </section>
          <Controls
            itemsLeft={this.todosLeft}
            isClearVisible={this.isClearVisible}
            onFilterChange={this.changeFilter}
            selectedFilter={this.state.selectedFilter}
          />
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

export default TodoApp;
