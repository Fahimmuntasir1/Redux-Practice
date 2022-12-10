import React, { useReducer } from "react";
import { initialState, reducer } from "../States/FormReducer";

const LongForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = (event) => {
    event.preventDefault();

    console.log(state);
  };
  return (
    <div
      style={{
        color: "red",
        textAlign: "left",
        width: "50%",
        margin: "20px auto",
      }}
    >
      <form onSubmit={submit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onBlur={(e) => {
              dispatch({
                type: "INPUT",
                payload: {
                  name: e.target.name,
                  value: e.target.value,
                },
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onBlur={(e) => {
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onBlur={(e) => {
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              });
            }}
          />
        </div>
        <div>
          <h1>Gender</h1>
          <div>
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onClick={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onClick={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                onClick={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="education">Education</label>
          <select
            name="education"
            id="education"
            onChange={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          >
            <option value="SSC">SSC</option>
            <option value="HSC">HSC</option>
            <option value="underGrad">Under Graduate</option>
            <option value="graduate">Graduate</option>
          </select>
        </div>
        <div>
          <label>Number of PCs</label>
          <div
            style={{ display: "flex" }}
            className="flex justify-between items-center gap-2 "
          >
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
            <div>
              <span>{state.quantity}</span>
            </div>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
          </div>
        </div>
        <div>
          <label htmlFor="feedback">Feedback</label>
          <textarea
            name="feedback"
            id="feedback"
            cols="30"
            rows="4"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          ></textarea>
        </div>

        <div>
          <div>
            <input
              className="mr-3"
              type="checkbox"
              name="term"
              id="terms"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
            <label htmlFor="terms">I agree to terms and conditions</label>
          </div>
          <button type="submit" disabled={!state.term}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LongForm;
