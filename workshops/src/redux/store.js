import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import counterReducer, { increment, add, subtract } from "./counter";
// 3. Import action creator from todos module
import todosReducer, {
  addTodo,
  removeTodo,
  toggleTodo,
  editTodo,
  toggleAll,
  selectTodosLeft
} from "./todos";
import appleReducer, {
  addWorm,
  bite,
  clean,
  grow,
  removeWorm,
  rot
} from "./apple";

const rootReducer = combineReducers({
  todos: todosReducer,
  counter: counterReducer,
  apple: appleReducer
});

const store = createStore(rootReducer, devToolsEnhancer());
const { getState, dispatch, subscribe } = store;

subscribe(() => {
  console.log("Current state value: ", getState());
});

subscribe(() => {
  console.log(
    "Todos left: ",
    getState().todos.filter(todo => !todo.isDone)
  );
});

window.clickIncrement = () => dispatch(increment());

// action creator -> action -> dispatch
dispatch(subtract(10));

const actions = [
  grow(),
  addWorm(),
  clean(),
  removeWorm(),
  bite(),
  bite(),
  bite(5),
  bite(10),
  rot(),
  // 4. Use action creators to check if everything works correctly
  addTodo(),
  addTodo("Learn Redux"),
  addTodo("Learn React"),
  addTodo("Check if toggle all works")
];

actions.forEach(dispatch);

const idOfTodoToToggle = getState().todos[0].id;
// // id           // text
dispatch(toggleTodo(idOfTodoToToggle));
dispatch(toggleAll());
dispatch(toggleAll());
