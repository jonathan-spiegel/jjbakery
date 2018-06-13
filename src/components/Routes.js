import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import TreatPage from './TreatPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/contact" component={ContactPage}/>
      <Route path="/:treat" component={TreatPage}/>
    </Switch>
  );
};

export default Routes;
