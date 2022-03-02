import React, { useReducer } from "react";

const initialState = {
  jobs: [],
  inputText: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "addNewJob":
      return { ...state, jobs: [...state.jobs, action.payload] };
    case "removeJob":
      return { ...state, jobs: action.payload };
    case "text":
      return { ...state, inputText: action.payload };

    default:
      return state;
  }
}

function Jobs() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeJob = (id) => {
    const newArray = state.jobs.filter((elem) => elem.id !== id);
    dispatch({ type: "removeJob", payload: newArray });
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: "text", payload: { id: Date.now(), text: e.target.value } })
        }
      />
      <button onClick={() => dispatch({ type: "addNewJob", payload: state.inputText })}>
        Add Jobs
      </button>
      {state.jobs?.map((e, i) => (
        <div key={i}>
          {e.text}
          <button onClick={() => removeJob(e.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Jobs;
