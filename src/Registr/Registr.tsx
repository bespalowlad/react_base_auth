import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { InputField } from '../shared'
import { signup, logout } from '../actions'

interface IinitialData {
    name: string
    email: string
    password: string
}

const Registr: React.FC = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState<IinitialData>({
        name: '',
        email: '',
        password: ''
    })

    useEffect(() => {
        localStorage.removeItem('token')
        dispatch(logout())
    }, [])

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        dispatch(signup(state))
    }

    const handleChange = (field: string) => (value: string) => {
        setState({
            ...state,
            [field]: value
        })
    }

    return (
        <div className="registr">
            <h3>Registr</h3>
            <form onSubmit={handleSubmit}>
                <InputField label="Name" value={state.name} onChange={handleChange('name')} type="text" placeholder="Name" />
                <InputField label="Email" value={state.email} onChange={handleChange('email')} type="text" placeholder="Email" />
                <InputField label="Password" value={state.password} onChange={handleChange('password')} type="password" placeholder="Password" />
                <button type="submit">Registr!</button>
            </form>
        </div>
    )
}

export default Registr