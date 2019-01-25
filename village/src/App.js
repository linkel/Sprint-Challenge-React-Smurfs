import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import {Route} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import lightBlue from "@material-ui/core/colors/lightBlue";
import {NavLink} from 'react-router-dom';

const primary = lightBlue[500]; // #F44336

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
        <AppBar id="nav-bar" position="static">
          <h1><NavLink exact to="/" activeClassName="active">List o' Smurfs</NavLink></h1><h1><NavLink to="/smurf-form" activeClassName="active">Add to the Village!</NavLink></h1>
          </AppBar>
        <Route exact path="/smurf-form" render={(props) => <SmurfForm handleStateUpdate={this.handleStateUpdate} {...props}/>}/>
        <Route exact path="/" render={(props) => <Smurfs smurfs={this.state.smurfs} {...props}/>}/>
      </div>
    );
  }
}

export default App;
