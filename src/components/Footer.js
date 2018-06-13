import React, { Component } from 'react';
import * as icons from '../common/SvgIcons';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-container">
        <div className="footer-inner-container">
          <div className="footer">
            {icons.instagramIcon()}
            {icons.facebookIcon()}
          </div>
        </div>
      </footer>
    );
  }
}
