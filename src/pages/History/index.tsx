import { TrashIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

import styles from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { sortTasks, type SortTasksOptions } from "../../utils/sortTasks";
import { useMemo, useState } from "react";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export function History() {
  const { state, dispatch } = useTaskContext();
  const hasTasks = state.tasks.length > 0;

  const [sortOptions, setSortOptions] = useState<{
    field: SortTasksOptions["field"];
    direction: SortTasksOptions["direction"];
  }>({
    field: "startDate",
    direction: "desc",
  });

  const sortedTasks = useMemo(() => {
    return sortTasks({
      tasks: state.tasks,
      field: sortOptions.field,
      direction: sortOptions.direction,
    });
  }, [state.tasks, sortOptions.field, sortOptions.direction]);

  function handleSortTasks({ field }: Pick<SortTasksOptions, "field">) {
    setSortOptions((prev) => ({
      field,
      direction: prev.direction === "desc" ? "asc" : "desc",
    }));
  }

  function handleResetHistory() {
    if (!confirm("Are you sure you want to delete the history?")) return;

    dispatch({ type: TaskActionTypes.RESET_STATE });
  }

  return (
    <>
      <MainTemplate>
        <Container>
          <Heading>
            <span>History</span>
            {hasTasks && (
              <span className={styles.buttonContainer}>
                <DefaultButton
                  icon={<TrashIcon />}
                  color="red"
                  aria-label="Clear all history"
                  title="Clear history"
                  onClick={handleResetHistory}
                />
              </span>
            )}
          </Heading>
        </Container>

        <Container>
          {hasTasks && (
            <div className={styles.responsiveTable}>
              <table>
                <thead>
                  <tr>
                    <th
                      onClick={() => handleSortTasks({ field: "name" })}
                      className={styles.thSort}
                    >
                      Task ↕
                    </th>
                    <th
                      onClick={() => handleSortTasks({ field: "duration" })}
                      className={styles.thSort}
                    >
                      Duration ↕
                    </th>
                    <th
                      onClick={() => handleSortTasks({ field: "startDate" })}
                      className={styles.thSort}
                    >
                      Date ↕
                    </th>
                    <th>Status</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedTasks.map((task) => {
                    const taskTypeDictionary = {
                      workTime: "Focus",
                      shortBreakTime: "Short break",
                      longBreakTime: "Long break",
                    };
                    return (
                      <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>{task.duration}min</td>
                        <td>{formatDate(task.startDate)}</td>
                        <td>{getTaskStatus(task, state.activeTask)}</td>
                        <td>{taskTypeDictionary[task.type]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          {!hasTasks && (
            <p style={{ textAlign: "center", fontWeight: "bold" }}>
              There are no tasks created yet
            </p>
          )}
        </Container>
      </MainTemplate>
    </>
  );
}
