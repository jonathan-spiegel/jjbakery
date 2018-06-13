import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classnames from 'classnames';

export default class Header extends Component {
  render() {
    return (
      <header className="header" role="navigation">
        <span className="logo-text">
          <Link className={classnames('link-styles', 'logo')} to="/">J&J Bakery</Link>
        </span>
        <div className="nav-list">
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
        </div>
      </header>
    );
  }
}
