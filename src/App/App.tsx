import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Home } from '../Home'
import { Login } from '../Login'
import { Registr } from '../Registr'
import { store } from '../store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="header">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/registr">Registration</Link>
              </li>
            </ul>
          </div>

          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" render={() =>
                <Login
                  initialData={{
                    email: '',
                    password: ''
                  }}
                  onSubmit={(values) => {
                    console.log('> values ', values)
                  }}
                />} />
              <Route exact path="/registr" render={() =>
                <Registr
                  initialData={{
                    name: '',
                    email: '',
                    password: ''
                  }}
                  onSubmit={(values) => {
                    console.log('> values ', values)
                  }}
                />} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  )
}

export default App;
