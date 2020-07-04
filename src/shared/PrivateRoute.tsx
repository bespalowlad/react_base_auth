import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router'

export interface IPrivateRouteProps extends RouteProps {
    isAuth: boolean
}

const PrivateRoute: React.FC<IPrivateRouteProps> = (props) => {
    return props.isAuth ? (
        <Route {...props} component={props.component} />
    ) : (
            <Redirect to='/login' />
        )
}

export default PrivateRoute