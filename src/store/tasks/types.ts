
export const enum ActionType {
    ADD_TASK = '@@TASK/ADD_TASK',
    EDIT_TASK = '@@TASK/EDIT_TASK',
    TOGGLE_TASK = '@@TASK/EDIT_TASK',
    REMOVE_TASK = '@@TASK/REMOVE_TASK',
    CHANGE_FILTER='@@TASK/CHANGE_FILTER'
}

export const enum VisibilityFilter {
    SHOW_ALL = 'SHOW_ALL',
    SHOW_COMPLETED = 'SHOW_COMPLETED',
    SHOW_ACTIVE = 'SHOW_ACTIVE'

}

export interface Action<T> {
    type: ActionType;
    payload: T;
}
export interface TaskState {
    visibilityFilter:VisibilityFilter;
    tasks:Task[];
}
export interface Task {
  id: number;
  title:string;
  completed: boolean;
}