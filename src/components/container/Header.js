import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div className="header">
        <h6> Page Header </h6>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/posts"> Post </Link>
      </div>
    );
  }
}
