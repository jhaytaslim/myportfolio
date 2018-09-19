import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeContainer from './container/HomeContainer'

class App extends Component {
  render() {
    return (
      <div >
        {/* <header >
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

        </header> */}
        {/* <p className="App-intro">
            
        </p> */}
        <HomeContainer/>
      </div>
    );
  }
}

export default App;
