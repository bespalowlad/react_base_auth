import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Container } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import { useStyles } from '../styles'

import { TRootState } from '../store'

import { PrivateRoute } from '../components'
import { Home } from '../HomePage'
import { Login } from '../LoginPage'
import { Register } from '../RegisterPage'

function App() {
  const classes = useStyles()
  const alert = useSelector((state: TRootState) => state.alert)

  return (
    <div className="App">
      <Container>
        {alert.message &&
          <div className={classes.alert}>
            {alert.type === 'error' ?
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                <strong>{alert.message}</strong>
              </Alert> :
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                <strong>{alert.message}</strong>
              </Alert>}
          </div>
        }
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
