import { ActionType, Action, Task, VisibilityFilter } from './types';


export const addTask = (title: string): Action<string> => {
    return ({
        type: ActionType.ADD_TASK,
        payload: title
    });
}
export const editTask=(task: Task): Action<Task> => {
    return {
        type: ActionType.EDIT_TASK,
        payload: task
    };
}

export const toggleTaskStatus=(id: number): Action<number> => {
    return {
        type: ActionType.TOGGLE_TASK,
        payload: id
    };
}

export const removeTask=(id: number): Action<number> => {
    return {
        type: ActionType.REMOVE_TASK,
        payload: id
    };
}

export const changeFilter = (filter: VisibilityFilter): Action<VisibilityFilter> => {
    return ({
        type: ActionType.ADD_TASK,
        payload: filter
    });
}