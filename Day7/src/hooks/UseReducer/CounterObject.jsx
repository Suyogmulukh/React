import { useReducer } from "react";

const initialState = {
  count: 0,
  secondCount: 100,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, count: state.count + action.value };
    case "DECREASE":
      return { ...state, count: state.count - action.value };
    case "INCREASE2":
      return { ...state, secondCount: state.secondCount + action.value };
    case "DECREASE2":
      return { ...state, secondCount: state.secondCount - action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

function CounterObject() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className="flex ">
        <h2 className="bg-sky-300 px-10 text-4xl w-72 py-5 rounded-full mt-20 ml-52 ">
          Count: {state.count}
        </h2>
        <h2 className="bg-sky-300 px-10 text-4xl w-72 py-5 rounded-full  mt-20 ml-10">
          Count: {state.secondCount}
        </h2>
      </div>

      <button
        onClick={() => dispatch({ type: "INCREASE", value: 1 })}
        className="bg-gray-300 px-10 text-4xl mt-10 rounded-2xl py-2 ml-5"
      >
        Increase
      </button>

      <button
        onClick={() => dispatch({ type: "DECREASE", value: 1 })}
        className="bg-gray-300 px-10 text-4xl mt-10 rounded-2xl py-2 ml-5"
      >
        Decrease
      </button>

      <button
        onClick={() => dispatch({ type: "INCREASE", value: 5 })}
        className="bg-gray-300 px-10 text-4xl mt-10 rounded-2xl py-2 ml-5"
      >
        Increase
      </button>

      <button
        onClick={() => dispatch({ type: "DECREASE", value: 5 })}
        className="bg-gray-300 px-10 text-4xl mt-10 rounded-2xl py-2 ml-5"
      >
        Decrease
      </button>

      <button
        onClick={() => dispatch({ type: "INCREASE2", value: 1 })}
        className="bg-gray-300 px-10 text-4xl mt-10 rounded-2xl py-2 ml-5"
      >
        Increase2
      </button>

      <button
        onClick={() => dispatch({ type: "DECREASE2", value: 1 })}
        className="bg-gray-300 px-10 text-4xl mt-10 rounded-2xl py-2 ml-5"
      >
        Decrease2
      </button>

      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="bg-gray-300 px-10 text-4xl mt-10 rounded-2xl py-2 ml-5"
      >
        Reset
      </button>
    </div>
  );
}

export default CounterObject;
