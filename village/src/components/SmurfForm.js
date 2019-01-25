import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios
      .post("http://localhost:3333/smurfs",this.state)
      .then(res => this.props.handleStateUpdate(res.data))
      .catch(err => console.log(err))
    
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <Input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <Input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <Input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <Button variant="contained" type="submit">Add to the village</Button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
