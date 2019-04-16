import { connect } from "react-redux";
import { AppState } from "src/store";
import { toggleTaskStatus, removeTask } from "src/store/tasks/actions";
import { Dispatch, AnyAction } from "redux";
import { VisibilityFilter, Task } from "src/store/tasks/types";
import { TaskItem } from "src/components/Task";
import * as React from "react";

interface StateProps {
  tasks: Task[];
}
interface DispatchProps {
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

type Props = StateProps & DispatchProps;

export const TaskList: React.FC<Props> = props => {
  const { tasks, toggleTask, deleteTask } = props;

  return (
    <div className="task-list">
      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            {...task}
            onClick={toggleTask}
            removeTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

const getVisibleTasks = (tasks: Task[], filter: VisibilityFilter): Task[] => {
  switch (filter) {
    case VisibilityFilter.SHOW_ALL:
      return tasks;
    case VisibilityFilter.SHOW_COMPLETED:
      return tasks.filter(t => t.completed);
    case VisibilityFilter.SHOW_ACTIVE:
      return tasks.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};
const mapStateToProps = (state: AppState): StateProps => ({
  tasks: getVisibleTasks(
    state.tasksState.tasks,
    state.tasksState.visibilityFilter
  )
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => ({
  toggleTask: id => dispatch(toggleTaskStatus(id)),
  deleteTask: id => dispatch(removeTask(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
