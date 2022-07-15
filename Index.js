// state - count:0
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require("redux");

//CONSTANTS
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

//STATE
const initialCounterState = {
  count: 0,
};

//ACTIONS
const incrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounterAction = () => {
  return {
    type: DECREMENT,
  };
};
const resetAction = () => {
  return {
    type: RESET,
  };
};

//REDUCER

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      state;
  }
};

//STORE

const store = createStore(counterReducer);

// SUBSCRIBE

store.subscribe(() => {
  console.log(store.getState());
});

// dispatch actions
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(decrementCounterAction())
store.dispatch(decrementCounterAction())
store.dispatch(decrementCounterAction())
store.dispatch(resetAction())
store.dispatch(incrementCounterAction())
