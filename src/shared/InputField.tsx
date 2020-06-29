import React from 'react'

interface IProps {
    label: string
    value: string
    onChange: (field: string) => void
    type: string
    placeholder: string
}

const InputField: React.FC<IProps> = ({ label, value, onChange, type, placeholder }) => {
    return (
        <label className="label">
            {label}
            <input value={value} onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value)} type={type} placeholder={placeholder} />
        </label>
    )
}

export default InputField