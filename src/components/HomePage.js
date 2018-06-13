import React, { Component } from 'react';
import imageUrls from '../common/imageUrls';

export default class HomePage extends Component {
  handleTreatClick = (image) => {
    image.name;
  }

  render() {
    return (
      <ul className="homepage-image-list">
        {imageUrls.map((image, index) => {
          return (
            <li
              key={index}
              className="list-item"
              onClick={this.handleTreatClick.bind(this, image)}
            >
              <div className="image-hover-overlay" style={{ background: image.color }}>
                <div className="image-name">{image.name}</div>
              </div>
              <img src={`images/${image.filename}`} className="list-item-image"/>
            </li>
          );
        })}
      </ul>
    );
  }
}
