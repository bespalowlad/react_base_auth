import React, { useEffect } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Home } from '../Home'
import { Login } from '../Login'
import { Registr } from '../Registr'
import { fetchProfile, logout } from '../actions'
import { StateType } from '../store'

function App() {
  const dispatch = useDispatch()
  const user = useSelector((state: StateType) => state.user.user)

  useEffect(() => {
    const token: string | null = localStorage.getItem('token')

    if (token) {
      dispatch(fetchProfile(token))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    dispatch(logout())
  }

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
          <div>
            {!!user && <div>
              <p>{user.name}</p>
              <button onClick={handleLogout}>Logout!</button>
            </div>}
          </div>
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
