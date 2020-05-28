import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Container } from '@material-ui/core';

import { PrivateRoute } from '../components'
import { Home } from '../HomePage'
import { Login } from '../LoginPage'
import { Register } from '../RegisterPage'

function App() {
  return (
    <div className="App">
      <Container>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
