import React, { Component } from 'react';

export default class Header extends Component {
  handleItemClick = (event) => {
    alert(event.currentTarget.innerText);
  }

  render() {
    return (
      <div className="header">
        <span className="logo-text">J&J Bakery</span>
        <ul>
          <li onClick={this.handleItemClick}>Treats</li>
          <li onClick={this.handleItemClick}>About Us</li>
          <li onClick={this.handleItemClick}>Contact Us</li>
        </ul>
      </div>
    );
  }
}
