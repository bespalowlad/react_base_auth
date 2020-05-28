import React from 'react'
import { useLocation } from 'react-router-dom'

const HomePage = () => {
    const location = useLocation()
    console.log('location: ', location)

    return <div>HomePage</div>
}

export default HomePage