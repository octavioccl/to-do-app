import { connect } from "react-redux";
import { AppState } from "src/store";
import { toggleTaskStatus } from "src/store/tasks/actions";
import { Dispatch, AnyAction } from "redux";
import { VisibilityFilter, Task } from "src/store/tasks/types";
import { TaskItem } from "src/components/Task";
import * as React from "react";

export interface OwnProps {
  tasks: Task[];
}

interface StateProps {
  propFromReduxStore: string;
}

interface DispatchProps {
  toggleTask: (id: number) => void;
}

type Props = StateProps & DispatchProps & OwnProps;

export const TaskList: React.FC<Props> = props => {
  const { tasks, toggleTask } = props;


  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} {...task} onClick={toggleTask} />
      ))}
    </ul>
  );
};

const getVisibleTasks = (tasks: Task[], filter: VisibilityFilter) => {
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
const mapStateToProps = (state: AppState) => ({
  tasks: getVisibleTasks(
    state.tasksState.tasks,
    state.tasksState.visibilityFilter
  )
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => ({
  toggleTask: id => dispatch(toggleTaskStatus(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
