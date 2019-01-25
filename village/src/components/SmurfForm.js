import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.snackbar = React.createRef();
    this.state = {
      id: '',
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    //if id is provided
    if (this.state.id.length > 0) {
      axios
        .put(`http://localhost:3333/smurfs/${this.state.id}`, {
          name: this.state.name,
          age: this.state.age,
          height: this.state.height
        })
        .then(this.showSnackBar())
        .then(res => this.props.handleStateUpdate(res.data))
        .catch(err => alert(err))
    } else {
      axios
        .post("http://localhost:3333/smurfs", {
          name: this.state.name,
          age: this.state.age,
          height: this.state.height
        })
        .then(res => { 
          this.props.handleStateUpdate(res.data)
          this.showSnackBar();
        })
        .catch(err => alert(err))
    }
    this.setState({
      id: '',
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  showSnackBar = () => {
    let x = this.snackbar.current;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          Only provide ID if editing a smurf.
          <Input
            onChange={this.handleInputChange}
            placeholder="id"
            value={this.state.id}
            name="id"
          />
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
        <div id="snackbar" ref={this.snackbar}>Village Changed!</div>
      </div>
    );
  }
}

export default SmurfForm;
