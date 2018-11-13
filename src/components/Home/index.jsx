import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return(
      <div>
      <h6> <Link to="/">Home page</Link> </h6>
      <h6> <Link to="/about">About page</Link> </h6>
      <div>
        <h5> Home page </h5>
      </div>
      </div>
    );
  }
}
