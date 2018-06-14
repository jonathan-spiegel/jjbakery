import React, { Component } from 'react';
import * as icons from '../common/SvgIcons';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-container">
        <div className="footer-inner-container">
          <div className="footer">
            <a className="social-link" target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/jaxxsnax">
              {icons.instagramIcon()}
            </a>
            <a className="social-link" target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/jaqui.bakery">
              {icons.facebookIcon()}
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
