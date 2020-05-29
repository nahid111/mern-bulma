import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from '../routing/PrivateRoute';
import NotFound from '../NotFound';
import Home from '../Home.jsx';
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';
import Alert from '../Alert';
import Profile from '../Profile.jsx';


const Routes = props => {
  return (
    <Fragment>
      <Alert />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
