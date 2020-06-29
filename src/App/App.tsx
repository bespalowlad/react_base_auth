import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import { Home } from '../Home'
import { Login } from '../Login'
import { Registr } from '../Registr'

function App() {
  return (
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
            <Route exact path="/login" component={Login} />
            <Route exact path="/registr" component={Registr} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
