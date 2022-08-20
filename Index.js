/* // state - count:0
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require("redux");

//CONSTANTS

const ADD_USER = "ADD_USER";
const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

//STATE
const initialCounterState = {
  users: [],
  count: 0,
};

//ACTIONS
const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
const incrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};
const incrementCounterByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
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
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      };
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
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

// DISPATCH ACTIONS
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(resetAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterByValue(3));
store.dispatch(addUser("Fahim"));
store.dispatch(addUser("Loves"));
store.dispatch(addUser("dash dash"));
 */

function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
