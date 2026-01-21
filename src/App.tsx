import { Home } from "./pages/Home";

import "./styles/theme.css";
import "./styles/gobal.css";
import { useState } from "react";
import type { TaskStateModel } from "./models/taskStateModel";
import { TaskContext } from "./contexts/TaskContext";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formatedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export function App() {
  const [state, setState] = useState(initialState);

  return (
    <TaskContext.Provider value={{ test: 321 }}>
      <Home />
    </TaskContext.Provider>
  );
}
