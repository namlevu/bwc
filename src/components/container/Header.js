import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div className="header mb-2">
        <Link className="p-2" to="/"> Home </Link>
        <Link className="menu-item p-2" to="/tech"> Tech </Link>
        <Link className="menu-item p-2" to="/career"> Career </Link>
        <Link className="menu-item p-2" to="/about"> About </Link>
        <Link className="menu-item p-2" to="/posts"> Post </Link>
      </div>
    );
  }
}
