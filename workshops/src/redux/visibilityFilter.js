// Action types (may export but isn't necessary)
const CHANGE_FILTER = "CHANGE_FILTER";

// Reducer (export default)
const initialState = "all";

const visibilityFilterReducer = (prevState = initialState, action) => {
  if (action.type === CHANGE_FILTER) {
    return action.payload;
  }

  return prevState;
};

export default visibilityFilterReducer;

// Action creators (export)
export const changeFilter = filter => {
  return {
    type: CHANGE_FILTER,
    payload: filter
  };
};

// Selectors (export)
export const selectVisibilityFilter = state => state.todoApp.visibilityFilter;
