import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button1 from './components/button1';
import Button2 from './components/button2';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button1/>
        <Button2/>    
      </div>
    );
  }
}

export default App;
