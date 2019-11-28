import uuid from "uuid";
import { selectVisibilityFilter } from "./visibilityFilter";

// Action types
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const EDIT_TODO = "EDIT_TODO";
const TOGGLE_ALL = "TOGGLE_ALL";

const FETCH_TODOS_START = "FETCH_TODOS_START";
const FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR";
const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";

// reducer
const initialState = [
  {
    id: uuid.v4(),
    isDone: false,
    text: "Task #1"
  },
  {
    id: uuid.v4(),
    isDone: false,
    text: "Task #2"
  },
  {
    id: uuid.v4(),
    isDone: true,
    text: "Task #3"
  }
];

const todosReducer = (prevState = initialState, action) => {
  switch (action.type) {
    // 2. Add new action type state change handler
    case ADD_TODO:
      if (action.payload.text.length >= 3) {
        return [action.payload, ...prevState];
      } else {
        return prevState;
      }
    case REMOVE_TODO:
      return prevState.filter(todo => todo.id !== action.payload);
    case TOGGLE_TODO:
      return prevState.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isDone: !todo.isDone
          };
        } else {
          return todo;
        }
      });
    case FETCH_TODOS_START:
      return [];
    case FETCH_TODOS_SUCCESS:
      return action.payload;
    case EDIT_TODO:
      return prevState.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            text: action.payload.text
          };
        } else {
          return todo;
        }
      });
    case TOGGLE_ALL:
      const areAllDone = prevState.every(todo => todo.isDone);
      return prevState.map(todo => {
        return {
          ...todo,
          isDone: !areAllDone
        };
      });
    default:
      return prevState;
  }
};

export default todosReducer;

// Action creators
// 1. Create action creator
export const addTodo = (text = "") => {
  return {
    type: ADD_TODO,
    payload: {
      id: uuid.v4(),
      isDone: false,
      text: text
    }
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    payload: id
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  payload: { id, text }
});

export const toggleAll = () => {
  return {
    type: TOGGLE_ALL
  };
};

export const fetchTodosStart = () => {
  return {
    type: FETCH_TODOS_START
  };
};
export const fetchTodosSuccess = todos => {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: todos
  };
};
export const fetchTodosError = error => {
  return {
    type: FETCH_TODOS_ERROR,
    error: error,
    payload: new Error(":(")
  };
};

// Selectors
// [{id: 1, text: '1'}, {id: 2, text: '2'}]
// ->
// [{id: 1, label: '1'}, {id: 2, label: '2'}]

export const selectTodos = state =>
  state.todoApp.todos.map(todo => {
    return {
      id: todo.id,
      isDone: todo.isDone,
      label: todo.text
    };
  });

export const selectTodosLeft = state => {
  return selectTodos(state).filter(todo => !todo.isDone).length;
};

export const selectIsClearVisible = state => {
  return selectTodos(state).some(todo => todo.isDone);
};

export const selectVisibleTodos = state => {
  const todos = selectTodos(state);
  const visibilityFilter = selectVisibilityFilter(state);

  if (visibilityFilter == "all") {
    return todos;
  } else if (visibilityFilter == "completed") {
    return todos.filter(todo => todo.isDone);
  } else if (visibilityFilter == "active") {
    return todos.filter(todo => !todo.isDone);
  }
};

export const fetchTodos = () => {
  return async dispatch => {
    try {
      dispatch(fetchTodosStart()); // isLoading -> true
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      const todos = data.map(todo => {
        return {
          id: todo.id,
          isDone: todo.completed,
          text: todo.title
        };
      });
      dispatch(fetchTodosSuccess(todos));
    } catch (error) {
      dispatch(fetchTodosError(error));
    }
  };
};
