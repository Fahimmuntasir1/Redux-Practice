import { ActionTypes } from "./ActionTypes";

export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  education: "",
  quantity: 0,
  feedback: "",
  term: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case ActionTypes.TOGGLE:
      return {
        ...state,
        term: !state.term,
      };
    case ActionTypes.INCREMENT:
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case ActionTypes.DECREMENT:
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    default:
      return state;
  }
};
