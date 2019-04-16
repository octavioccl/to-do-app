import { Reducer } from 'redux'
import { TaskState, ActionType, Action, VisibilityFilter } from "./types";


const initialState: TaskState = {
    visibilityFilter: VisibilityFilter.SHOW_ALL,
    tasks: []
}

let nextTaskId = 0

const reducer: Reducer<TaskState> = (state = initialState, action: Action<any>) => {
    switch (action.type) {
        case ActionType.ADD_TASK: {
            return { ...state, tasks: [...state.tasks, { id: nextTaskId++, title: action.payload, completed: false }] }
        }
        case ActionType.TOGGLE_TASK: {
            const newTasks = [...state.tasks];
            newTasks[action.payload].completed = !newTasks[action.payload].completed;
            return { ...state, tasks: newTasks }
        }
        case ActionType.EDIT_TASK: {
            return {
                ...state,
                tasks: state.tasks.map(t => t.id === action.payload.id ? action.payload : t)
            }
        }
        case ActionType.REMOVE_TASK: {

            return { ...state, tasks: state.tasks.filter((e) => e.id !== action.payload) }
        }
        case ActionType.CHANGE_FILTER: {

            return { ...state, visibilityFilter: action.payload }
        }
        default: {
            return state
        }
    }
}
export { reducer as tasksReducer }