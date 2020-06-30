import React, { useState } from 'react'
import { InputField } from '../shared/'

interface IinitialData {
    email: string
    password: string
}

interface IProps {
    initialData: IinitialData
    onSubmit: (state: IinitialData) => void
}

const Login: React.FC<IProps> = ({ initialData, onSubmit }) => {
    const [state, setState] = useState<IinitialData>(initialData)

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        onSubmit(state)
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