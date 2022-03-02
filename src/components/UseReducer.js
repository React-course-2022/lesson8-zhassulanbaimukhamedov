import React, { useReducer } from "react";

const initialState = {
  count: 0,
  random: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "dicrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "randomNumber":
      return { ...state, random: action.payload };
    default:
      return state;
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getRandom = () => {
    let num = Math.random();
    dispatch({ type: "randomNumber", payload: num });
  };
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment", payload: 20 })}>Add1</button>
      <button onClick={() => dispatch({ type: "dicrement" })}>mMinus</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      {state.count}

      <div>
        {" "}
        <button onClick={getRandom}>random</button>
        {state.random}
      </div>
    </div>
  );
}

export default UseReducer;
