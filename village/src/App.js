import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => this.setState({smurfs: res.data}))
      .catch(err => console.log(err))
  }

  // Can also write the following using componentDidUpdate, but writing it with a custom function skips making a get request twice.
  handleStateUpdate = (obj) => {
    this.setState({smurfs : obj})
  }

  render() {
    return (
      <div className="App">
        <SmurfForm handleStateUpdate={this.handleStateUpdate} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
