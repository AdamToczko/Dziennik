import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import counterReducer, { increment, add, subtract } from "./counter";
import todosReducer from "./todos";

const rootReducer = combineReducers({
  todos: todosReducer,
  counter: counterReducer
});

const store = createStore(rootReducer, devToolsEnhancer());
const { getState, dispatch, subscribe } = store;

subscribe(() => {
  console.log("Current state value: ", getState());
});

window.clickIncrement = () => dispatch(increment());

// action creator -> action -> dispatch
dispatch(subtract(10));
