import { createStore, combineReducers } from "redux";
import counterReducer, { increment, add, subtract } from "./counter";
import todosReducer from "./todos";

const rootReducer = combineReducers({
  todos: todosReducer,
  counter: counterReducer
});

const store = createStore(rootReducer);
const { getState, dispatch, subscribe } = store;

subscribe(() => {
  console.log("Current counter value: ", getState().counter);
});

window.clickIncrement = () => dispatch(increment());

// action creator -> action -> dispatch
dispatch(subtract(10));
