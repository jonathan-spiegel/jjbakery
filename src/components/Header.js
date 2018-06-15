import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="app-root header" role="navigation">
        <Link to="/">
          <img src="images/logo.png" className="logo-image"/>
        </Link>
        <ul>
          <li>
            <NavLink className="link-styles" activeClassName="selected" exact to="/">TREATS</NavLink>
          </li>
          <li>
            <NavLink className="link-styles" activeClassName="selected" to="/about">ABOUT US</NavLink>
          </li>
          <li>
            <NavLink className="link-styles" activeClassName="selected" to="/contact">CONTACT US</NavLink>
          </li>
        </ul>
      </header>
    );
  }
}
