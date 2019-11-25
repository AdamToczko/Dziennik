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
  console.log("Current counter value: ", getState());
});

const actions = [
  increment(),
  increment(),
  addTodo("New todo Item"),
  add(5),
  increment()
];
actions.forEach(dispatch);

window.clickIncrement = () => dispatch(increment());

dispatch(subtract(10));
