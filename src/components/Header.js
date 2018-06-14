import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classnames from 'classnames';

export default class Header extends Component {
  render() {
    return (
      <header className="app-root header" role="navigation">
        <div className="logo-text">
          <Link className={classnames('link-styles', 'logo')} to="/">J&J Bakery</Link>
        </div>
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
