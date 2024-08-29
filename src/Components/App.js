//import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayBios from './DisplayBios';
import AddDeveloper from './AddDeveloper';
//import Developer from './Developer';
import Home from './Home';
import Navbar from './Navbar';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <DisplayBios />
      </header>
    </div>
  );
}*/

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      /*developers: [
          new Developer(1, 'Sudharsan', 'Ganesan', 'Python', 2018),
          new Developer(2, 'John', 'Smith', 'C++', 2005)
      ]*/
     developers: []
    };
  }

  componentDidMount() {
      fetch('https://dev-bios-api-dot-cog01hprmn542jqme4w772bk1dxpr.uc.r.appspot.com/developers/all')
        .then((response) => response.json())
        .then((data) => {
          this.setState({developers: data})
          })
        .catch(err   => console.log(err))     
  } 

  /*handleNewDeveloper = (dev) => {       
    dev.id = this.state.developers.length + 1;
    let newDev = [...this.state.developers, dev]; //taking the developers array from state and appending the new developer
    this.setState({developers: newDev});
  }*/


  render () {
    return(
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/developers" element={ <DisplayBios developers= { this.state.developers }/> }/>
          <Route path="/developers/add" element={ <AddDeveloper /> }/>
        </Routes>
      </Router>
    )
  }
}

export default App;

//<Route path="/developers/add" element={ <AddDeveloper handleNewDeveloper = { this.handleNewDeveloper }/> }/>