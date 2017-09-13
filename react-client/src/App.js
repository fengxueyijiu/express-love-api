import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Settings from './settings'
import Header from './Header'
import Main from './Main'
import { BrowserRouter as Router} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
