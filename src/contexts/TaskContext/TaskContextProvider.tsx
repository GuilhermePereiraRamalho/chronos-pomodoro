import { useEffect, useReducer, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  type ActionType = {
    type: string;
    payload?: number;
  };

  const [myState, dispatch] = useReducer(
    (state, action) => {
      console.log(action, state);

      switch (action.type) {
        case "INCREMENT": {
          if (!action.payload) return state;
          return {
            ...state,
            secondRemaing: state.secondRemaing + action.payload,
          };
        }
        case "DECREMENT": {
          if (!action.payload) return state;
          return {
            ...state,
            secondRemaing: state.secondRemaing - action.payload,
          };
        }
        case "RESET": {
          return {
            secondRemaing: 0,
          };
        }
      }

      return state;
    },
    {
      secondRemaing: 0,
    },
  );

  // useEffect(() => {
  //   console.log(state)
  // }, [state])

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {/* {children} */}
      <h1>The state is: {JSON.stringify(myState)}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
        Increment + 10
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 20 })}>
        Increment + 20
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 50 })}>
        DECREMENT - 50
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </TaskContext.Provider>
  );
}
