import { Home } from "./pages/Home";
import { TaskContextProvider } from "./contexts/TaskContext";

import "./styles/theme.css";
import "./styles/gobal.css";

export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
