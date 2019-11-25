// ACTION TYPES
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";

// ACTION CREATORS
export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const add = (value = 0) => {
  return {
    type: ADD,
    payload: value
  };
};

export const subtract = (value = 0) => {
  return {
    type: SUBTRACT,
    payload: value
  };
};

export const reset = () => {
  return {
    type: RESET
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

// ACTIONS
// state = 0

// [increment(), subtract(5), add(4), reset(), increment()];

// state = 1

// (prevState, action) -> newState
const counterReducer = (prevState = 0, action) => {
  if (action.type === INCREMENT) {
    return prevState + 1;
  } else if (action.type === DECREMENT) {
    return prevState - 1;
  } else if (action.type === SUBTRACT) {
    return prevState - action.payload;
  } else if (action.type === ADD) {
    return prevState + action.payload;
  } else if (action.type === RESET) {
    return 0;
  }

  return prevState;
};

export default counterReducer;
