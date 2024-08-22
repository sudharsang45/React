import logo from './logo.svg';
import './App.css';
import DisplayBios from './DisplayBios';
import AddDeveloper from './AddDeveloper';
import React from 'react';
import Developer from './Developer';

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

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      developers: [
          new Developer(1, 'Sudharsan', 'Ganesan', 'Python', 2018),
          new Developer(2, 'John', 'Smith', 'C++', 2005)
      ]
    };
  }

  handleNewDeveloper = (dev) => {
    dev.id = this.state.developers.length + 1;
    let newDev = [...this.state.developers, dev]; //taking the developers array from state and appending the new developer
    this.setState({developers: newDev});
  }

  render () {
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
          <DisplayBios developers= { this.state.developers }/>
          <AddDeveloper handleNewDeveloper = { this.handleNewDeveloper }/>
        </header>
      </div>
    );
  }
}

export default App;