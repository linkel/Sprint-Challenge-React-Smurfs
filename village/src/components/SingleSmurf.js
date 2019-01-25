import React from 'react';
import { Link } from 'react-router-dom';

const SingleSmurf = (props) => {
  console.log(props);
  // find the item with the id that is in the url bar and set it to const item;
  // loop over data -> grab the id from the url and search for our item
  const smurf = props.smurfs.find(
    smurf => `${smurf.id}` === props.match.params.smurfId
  );

  if (!smurf) return <h2>Cannot find that smurf!</h2>;

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="item-title-wrapper">
          <h2>{smurf.name}</h2>
          <h3>He or she is {smurf.height} cm tall, and {smurf.age} years old.</h3>
        </div>
        <Link to="/">Back</Link>
      </div>
    </div>
  );
}

export default SingleSmurf;
