import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TreatPage extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.match.params.treat}</h1>
      </div>
    );
  }
}

TreatPage.propTypes = {
  match: PropTypes.object,
};
