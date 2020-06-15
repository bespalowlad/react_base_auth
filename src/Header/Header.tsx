import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TRootState } from '../store'

import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom'

const Header = () => {
    const user = useSelector((state: TRootState) => state.currentUser.user)

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
                {!user ?
                    <div className="controls">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Registration</Link>
                    </div> :
                    <div className="user">
                        Здравствуйте, {user.username}
                    </div>
                }
            </Container>
        </header>
    )
}

export default Header