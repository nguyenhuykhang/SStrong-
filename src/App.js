import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navcomponent from './components/Navcomponent';
import Getstarted from './components/getstarted/Getstarted';
import Aboutus from './components/aboutus/Aboutus';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Navcomponent/>
    </div>
  );
}

export default App;
