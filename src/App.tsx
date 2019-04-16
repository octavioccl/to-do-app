import * as React from "react";
import "./App.css";

import logo from "./logo.svg";
import AddTask from './containers/AddTask';
import Filters from './components/Filters';
import  TaskList from './containers/TasksList';

class App extends React.Component {
  public render() {
    return (
      <div className="container">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title"> To-Do Application</h1>
        </header>

        <AddTask/>
        <TaskList/>
        <Filters/>

        <footer className="footer" />
      </div>
    );
  }
}

export default App;
