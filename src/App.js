import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from './components/common/router/PrivateRoute';
import Main from './containers';
import Login from './containers/LoginScreen';

class App extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute exact path="/" component={Main} />
        <Route path="/login" component={Login} />
      </Switch>
    );
  }
}

export default withRouter(connect(null, null)(App));