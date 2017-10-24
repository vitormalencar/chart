import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from "./Bar";

class App extends Component {
  render() {
    return (
      <div id='range-container'>
        <BarChart/>
      </div>
    );
  }
}

export default App;
