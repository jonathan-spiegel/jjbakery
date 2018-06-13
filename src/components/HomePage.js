import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import imageUrls from '../common/imageUrls';

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      imageName: '',
    };
  }

  handleTreatClick(image) {
    const imageName = image.name.replace(/ /g, '');
    this.setState({
      redirect: true,
      imageName,
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/${this.state.imageName}`}/>;
    }

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
