import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

// const PrivateRoute = ({ component, ...rest }: any) => {
//     return (
//         <Route {...rest} render={(props) => (
//             localStorage.getItem('user')
//                 ? React.createElement(component, props)
//                 : <Redirect to="/login" />
//         )} />
//     )
// }


const PrivateRoute: React.FC<RouteProps> = (props) => {
    return localStorage.getItem('token') ?
        <Route {...props} /> :
        <Redirect to="/login" />
}


export default PrivateRoute