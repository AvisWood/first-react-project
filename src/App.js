import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Skills from './Components/Skills'
import Contact from './Components/Contact'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Skills/>
      <Contact/>
         
        
      </div>
    );
  }
}

export default App;
