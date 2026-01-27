import { useEffect, useReducer, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  const [number, dispatch] = useReducer((state, action) => {
    console.log(action, state);

    switch (action) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      case "INITIAL_STATE":
        return 0;
    }

    return state;
  }, 0);

  // useEffect(() => {
  //   console.log(state)
  // }, [state])

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {/* {children} */}
      <h1>The number is: {number}</h1>
      <button onClick={() => dispatch("INCREMENT")}>Increment number</button>
      <button onClick={() => dispatch("DECREMENT")}>Decrement number</button>
      <button onClick={() => dispatch("INITIAL_STATE")}>Initial State</button>
    </TaskContext.Provider>
  );
}
