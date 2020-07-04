import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputField } from '../shared/'
import { signin } from '../actions'

interface IinitialData {
    email: string
    password: string
}

const Login: React.FC = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState<IinitialData>({
        email: '',
        password: ''
    })

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