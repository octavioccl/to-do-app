import * as React from 'react';
import * as ReactDOM from 'react-dom';
/* Make the store available to all container 
components in the application without passing it explicitly */
import { Provider } from 'react-redux';
// Store type from Redux
import { Store } from 'redux';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore, { AppState } from './store';

interface Props {
  store: Store<AppState>;
}
/*
Create a root component that receives the store via props
and wraps the App component with Provider, giving props to containers
*/
const Root: React.SFC<Props> = props => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
};
const store = configureStore();
// Render the App
ReactDOM.render(<Root store={store} />, document.getElementById(
  'root'
) as HTMLElement);


registerServiceWorker();
