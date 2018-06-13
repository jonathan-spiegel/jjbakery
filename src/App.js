import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Main from './components/Main';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Main/>
      </Fragment>
    );
  }
}
