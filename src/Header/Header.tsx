import React from 'react'
import { useSelector } from 'react-redux'
import { TRootState } from '../store'

import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom'

const Header = () => {
    const user = useSelector((state: TRootState) => state.currentUser.user)
    const loggedIn = useSelector((state: TRootState) => state.authenticate.loggedIn)

    return (
        <header>
            <Container>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>
                {user && loggedIn ?
                    <div className="user">
                        Здравствуйте, {user.username}
                    </div> :
                    <div className="controls">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Registration</Link>
                    </div>
                }
            </Container>
        </header>
    )
}

export default Header