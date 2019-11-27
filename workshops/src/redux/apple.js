// Action types
const BITE = "BITE";
const ROT = "ROT";
const CLEAN = "CLEAN";
const GROW = "GROW";
const REMOVE_WORM = "REMOVE_WORM";
const ADD_WORM = "ADD_WORM";

// Reducer
const initialState = {
  color: "green",
  size: 1,
  hasWorm: false,
  isDirty: true
};

export default function appleReducer(prevState = initialState, action) {
  switch (action.type) {
    case GROW:
      // Object cloning method
      // 1. {...prevState}
      // 2. JSON.parse(JSON.stringify(prevState))
      // 3. Object.assign({}, prevState)

      return { ...prevState, size: 10, color: "red" };
    // 1. {...prevState, size: 10}
    // 2. {color: "green", size: 1, hasWorm: false, isDirty: true, size: 10}
    // 3. {color: "green", hasWorm: false, isDirty: true, size: 10}
    case ROT:
      return { ...prevState, color: "brown" };
    case CLEAN:
      return { ...prevState, isDirty: false };
    case BITE:
      //   ilosc pozostalych gryzow <= jak duzy gryz chce wziac
      if (prevState.size <= action.payload) {
        return { ...prevState, size: 0 };
      } else {
        return { ...prevState, size: prevState.size - action.payload };
      }
    case REMOVE_WORM:
      return { ...prevState, hasWorm: false };
    case ADD_WORM:
      return { ...prevState, hasWorm: true };
    default:
      return prevState;
  }
}

// Action creators
export const bite = (bites = 1) => {
  return {
    type: BITE,
    payload: bites
  };
};

export const rot = () => {
  return {
    type: ROT
  };
};

export const clean = () => {
  return {
    type: CLEAN
  };
};

export const grow = () => {
  return {
    type: GROW
  };
};

export const removeWorm = () => {
  return {
    type: REMOVE_WORM
  };
};

export const addWorm = () => {
  return {
    type: ADD_WORM
  };
};

// const apple = getState();
// const { color, hasWorm, isDirty } = apple;
// const eatable = color === "red" && !hasWorm && !isDirty && size !== 0
export const selectApple = state => state.apple;

export const selectEatable = state => {
  const { color, isDirty, hasWorm, size } = selectApple(state);
  return color === "red" && isDirty === false && hasWorm === false && size > 0;
};
