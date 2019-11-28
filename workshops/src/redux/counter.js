// ACTION TYPES
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";

// state = 1
const initialState = 0;

// (prevState, action) -> newState
const counterReducer = (prevState = initialState, action) => {
  // console.log("counter reducer here, got action: ", action);
  if (action.type === INCREMENT) {
    return prevState + 1;
  } else if (action.type === DECREMENT) {
    return prevState - 1;
  } else if (action.type === SUBTRACT) {
    return prevState - action.payload;
  } else if (action.type === ADD) {
    return prevState + action.payload;
  } else if (action.type === RESET) {
    return initialState;
  }

  return prevState;
};

export default counterReducer;

// ACTION CREATORS
export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const add = (value = 0) => {
  if (typeof value !== "number") {
    return {
      type: ADD,
      payload: 0
    };
  }

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

// ACTIONS
// state = 0

// [increment(), subtract(5), add(4), reset(), increment()];

// Selectors
export const selectCounter = state => state.count;

// Side effects
export const incrementAsync = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(resetOnlyWhenMoreThan20());
    }, 5000);
  };
};

export const resetOnlyWhenMoreThan20 = () => {
  return (dispatch, getState) => {
    const state = getState();
    const counter = selectCounter(state);

    if (counter >= 20) {
      dispatch(reset());
    } else {
      dispatch(add(19));
    }
  };
};

export const subtractWhenDivisableBy5 = () => {
  return (dispatch, getState) => {
    const state = getState();
    const counter = selectCounter(state);

    if (counter % 5 === 0) {
      dispatch(subtract(5));
    }
  };
};
