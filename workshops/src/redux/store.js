import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer, {
  increment,
  add,
  subtract,
  incrementAsync
} from "./counter";
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
  rot,
  selectEatable
} from "./apple";
import visibilityFilterReducer from "./visibilityFilter";

const rootReducer = combineReducers({
  count: counterReducer,
  apple: appleReducer,
  todoApp: combineReducers({
    todos: todosReducer,
    visibilityFilter: visibilityFilterReducer
  })
});

const composeEnhancer = composeWithDevTools({});

export const store = createStore(
  rootReducer,
  undefined,
  composeEnhancer(applyMiddleware(thunk, logger))
);
export const { getState, dispatch, subscribe } = store;

subscribe(() => {
  // console.log("Current state value: ", getState());
  console.log("Is apple eatable? ", selectEatable(getState()));
});

subscribe(() => {
  // console.log(
  //   "Todos left: ",
  //   getState().todos.filter(todo => !todo.isDone)
  // );
});

// Add clickIncrement function to global namespace
window.clickIncrement = () => dispatch(increment());

// Add listed action creators to global namespace
const actionsToBeBoundToWindow = [grow, addWorm, clean].forEach(
  actionCreator => {
    window[actionCreator.name] = () => dispatch(actionCreator());
  }
);

const actions = [
  grow(), // false
  addWorm(), // false
  clean(), // false
  removeWorm(), // true
  bite(), // true
  bite(), // true
  bite(5), // true
  bite(10), // false
  rot(), // false
  // 4. Use action creators to check if everything works correctly
  addTodo(),
  addTodo("Learn Redux"),
  addTodo("Learn React"),
  addTodo("Check if toggle all works")
];

dispatch(incrementAsync());

// actions.forEach(dispatch);

// const idOfTodoToToggle = getState().todos[0].id;
// // id           // text
// dispatch(toggleTodo(idOfTodoToToggle));
