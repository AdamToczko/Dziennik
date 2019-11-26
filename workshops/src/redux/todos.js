// Action types
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const EDIT_TODO = "EDIT_TODO";

// Action creators
const addTodo = () => {
  return {
    type: ADD_TODO,
    payload: "ajshdjasd"
  };
};

const removeTodo = () => {};

// reducer
const todosReducer = (prevState, action) => {
  console.log("todos reducer here, got action: ", action);
  return [];
};

export default todosReducer;
