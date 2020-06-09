import React from 'react'

import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom'

const Header = () => {
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
                {true ?
                    <div className="controls">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Registration</Link>
                    </div> :
                    <div className="user">
                        Здравствуйте, ...
                    </div>
                }
            </Container>
        </header>
    )
}

export default Header