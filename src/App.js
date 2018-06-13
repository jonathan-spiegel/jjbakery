import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="app-root">
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </Fragment>
    );
  }
}
