import Clocks from './components/Clocks';
import React, { Component } from 'react';
import logo from './logo.svg';
import StateLessComponent from './components/StateLessComponent';
import Todo from './components/Todo';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">React</h1>
        </header>
        <div className="examples">
          <StateLessComponent value={'hi!'}/>
          <Clocks/>
					<hr/>
					<Todo/>
        </div>
      </div>
    );
  }
}

export default App;
