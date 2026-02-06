import type { TaskModel } from "../../models/taskModel";
import type { TaskStateModel } from "../../models/taskStateModel";

export const TaskActionTypes = {
  START_TASK: "START_TASK",
  INTERRUPT_TASK: "INTERRUPT_TASK",
  RESET_STATE: "RESET_STATE",
  COUNT_DOWN: "COUNT_DOWN",
  COMPLETE_TASK: "COMPLETE_TASK",
  CHANGE_SETTINGS: "CHANGE_SETTINGS",
} as const;

export type TaskActionType = keyof typeof TaskActionTypes;

export type TaskActionModel =
  | {
      type: typeof TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: typeof TaskActionTypes.COUNT_DOWN;
      payload: { secondsRemaing: number };
    }
  | {
      type: typeof TaskActionTypes.INTERRUPT_TASK;
    }
  | {
      type: typeof TaskActionTypes.RESET_STATE;
    }
  | {
      type: typeof TaskActionTypes.COMPLETE_TASK;
    }
  | {
      type: typeof TaskActionTypes.CHANGE_SETTINGS;
      payload: TaskStateModel["config"];
    };
