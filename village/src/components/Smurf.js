import React from 'react';
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';

const Smurf = props => {
  return (
    <div className="Smurf_wrapper">
      <Link to={`/smurf/${props.id}`}>
        <div className="Smurf">
          <h3>{props.name}</h3>
          <strong>{props.height} tall</strong>
          <p>{props.age} smurf years old</p>
        </div>
        <Button onClick={() => props.handleDelete(props.id)} variant="contained">Banish</Button>
      </Link>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

