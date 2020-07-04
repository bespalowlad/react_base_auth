import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputField } from '../shared/'
import { signin, logout } from '../actions'
import { StateType } from '../store'

interface IinitialData {
    email: string
    password: string
}

const Login: React.FC = () => {
    const dispatch = useDispatch()
    // const loginRequest = useSelector((state: StateType) => state.user.loginRequest)
    const [state, setState] = useState<IinitialData>({
        email: '',
        password: ''
    })

    useEffect(() => {
        // if (!loginRequest) {
        localStorage.removeItem('token')
        dispatch(logout())
        // }
    }, [])

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        dispatch(signin(state))
    }

    const handleChange = (field: string) => (value: string) => {
        setState({
            ...state,
            [field]: value
        })
    }

    return (
        <div className="login">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <InputField label='Email' value={state.email} onChange={handleChange('email')} type="email" placeholder="Email" />
                <InputField label='Password' value={state.password} onChange={handleChange('password')} type="password" placeholder="Password" />
                <button type="submit">Login!</button>
            </form>
        </div>
    )
}

export default Login