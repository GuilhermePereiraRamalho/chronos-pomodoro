import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask = {
    workTime: (
      <span>
        In this cycle, <strong>focus</strong> for{" "}
        <strong>{state.config.workTime} minutes</strong>
      </span>
    ),
    shortBreakTime: (
      <span>
        In this cycle, a <strong>short break</strong> for{" "}
        <strong>{state.config.shortBreakTime} minutes</strong>
      </span>
    ),
    longBreakTime: (
      <span>
        In this cycle, a <strong>long break</strong> for{" "}
        <strong>{state.config.longBreakTime} minutes</strong>
      </span>
    ),
  };

  const getTipForWhenNoActiveTask = (minutes: number) => (
    <span>
      Next cycle is: <strong>{minutes} minutes</strong>
    </span>
  );

  const tipsForNoActiveTask = {
    workTime: getTipForWhenNoActiveTask(state.config.workTime),
    shortBreakTime: getTipForWhenNoActiveTask(state.config.shortBreakTime),
    longBreakTime: getTipForWhenNoActiveTask(state.config.longBreakTime),
  };
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
