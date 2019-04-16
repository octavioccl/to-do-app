import { combineReducers, createStore, Store } from 'redux';
import { TaskState } from './tasks/types';
import { tasksReducer } from './tasks/reducer';

// Create an interface for the application state
export interface AppState {
    tasksState: TaskState;
  }

  // Create the root reducer
const rootReducer = combineReducers<AppState>({
    tasksState: tasksReducer,
  });
  
  // Create a configure store function of type `IAppState`
  export default function configureStore(): Store<AppState, any> {
    const store = createStore(rootReducer, undefined);
    return store;
  }