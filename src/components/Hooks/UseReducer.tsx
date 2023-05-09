/** @format */

import React, { useReducer, useState } from "react";

type ActionType = {
  type: "INCREMENT" | "DECREMENT" | "UPDATE_BY_X";
  payload?: number;
};

interface StateType {
  count: number;
}

type UpdateByXType = {
  type: "UPDATE_BY_X";
  payload: number;
};

const initialState: StateType = { count: 0 };

const reducer = (
  state: StateType = initialState,
  action: ActionType | UpdateByXType
): StateType => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "UPDATE_BY_X":
      return { count: state.count + (action.payload || 0) };
    default:
      return state;
  }
};

function UseReducer() {
  const [Input, setInput] = useState<number>();
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <h1>{state?.count}</h1>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement{" "}
        </button>
        <input
          type="number"
          placeholder="Update By X"
          value={Input}
          onChange={(e) => setInput(parseInt(e.target.value))}
        />
        <button
          onClick={() => {
            dispatch({ type: "UPDATE_BY_X", payload: Input || 0 });
          }}
        >
          Update By {Input || 0}
        </button>
      </div>
    </>
  );
}

export default UseReducer;
