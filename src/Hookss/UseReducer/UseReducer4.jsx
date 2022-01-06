import React, { createContext, useReducer } from "react";
import CompA from "./CompA";

export const CountContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
  if (action === "incr") {
    return state + 1;
  } else if (action === "decr") {
    return state > 0 ? state - 1 : state;
  } else {
    return 0;
  }
};

const UseReducer4 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>count - {count}</h1>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <CompA />
      </CountContext.Provider>
    </>
  );
};

export default UseReducer4;
