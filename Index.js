const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";
//state
const initialCounterState = {
  count: 0,
};
const initialUsersState = {
  users: [
    {
      name: "fahim muntasir",
    },
  ],
};

//action is object is's has two value - type, payload
// INCREMENT COUNTER
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
// DECREMENT COUNTER
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
// ADD USER
const addUser = () => {
  return {
    type: ADD_USER,
    payload: { user: "hero alom" },
  };
};

// Create reducer for counter
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      state;
  }
};
