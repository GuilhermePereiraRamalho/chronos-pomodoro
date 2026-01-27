import type { TaskModel } from "../../models/taskModel";

export const TaskActionTypes = {
  START_TASK: "START_TASK",
  INTERRUPT_TASK: "INTERRUPT_TASK",
  RESET_STATE: "RESET_STATE",
} as const;

export type TaskActionType = keyof typeof TaskActionTypes;

export type TaskActionModel =
  | {
      type: typeof TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: typeof TaskActionTypes.INTERRUPT_TASK;
      payload: TaskModel;
    }
  | {
      type: typeof TaskActionTypes.RESET_STATE;
    };
