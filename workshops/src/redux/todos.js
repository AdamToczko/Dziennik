import uuid from "uuid";

// Action types
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const EDIT_TODO = "EDIT_TODO";

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

// reducer
const initialState = [];

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
    default:
      return prevState;
  }
};

export default todosReducer;
