import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Container } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import { useStyles } from '../styles'

import { TRootState } from '../store'

import { PrivateRoute } from '../components'
import { Header } from '../Header'
import { Home } from '../HomePage'
import { Login } from '../LoginPage'
import { Register } from '../RegisterPage'
import { profileFetch } from '../actions/user.actions'

function App() {
  const classes = useStyles()
  const alert = useSelector((state: TRootState) => state.alert)
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      dispatch(profileFetch(token))
    }
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
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
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </Container>
        </main>
      </div>
    </Router>
  );
}

export default App;
