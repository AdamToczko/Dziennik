import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import counterReducer, { increment, add, subtract } from "./counter";
import todosReducer from "./todos";
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
  rot()
];

actions.forEach(dispatch);
