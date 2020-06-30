import React, { useState } from 'react'
import { InputField } from '../shared'

interface IinitialData {
    name: string
    email: string
    password: string
}

interface IProps {
    initialData: IinitialData
    onSubmit: (state: IinitialData) => void
}

const Registr: React.FC<IProps> = ({ initialData, onSubmit }) => {
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