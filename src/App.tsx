import * as React from "react";
import "./App.css";

import logo from "./logo.svg";
import AddTask from './containers/AddTask';
import Filters from './components/Filters';

class App extends React.Component {
  public render() {
    return (
      <div className="container">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title"> To-Do Application</h1>
        </header>

        <AddTask/>
        <Filters/>
        <input type="text" className="textInput" />

        <footer className="footer" />
      </div>
    );
  }
}

export default App;
