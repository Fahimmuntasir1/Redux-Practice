import React, { useReducer } from "react";

const Counter = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    } else if (action.type === "DECREMENT") {
      return state - 1;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h2>{state}</h2>
      </div>
      <div>
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          style={{ padding: "7px", cursor: "pointer", marginRight: "5px" }}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          style={{ padding: "7px", cursor: "pointer" }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
