import React from "react";
import { useReducer } from "react";

const initialState = { 
    count: 0 
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter({ initialState }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="mt-5 flex flex-col items-center justify-center">
      <h2>Count: {state.count}</h2>

      <div className="flex gap-3 mt-3">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="bg-green-500 text-white font-semibold px-3"
        >
          increment
        </button>

        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="bg-red-500 text-white font-semibold px-3"
        >
          decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
