import React from 'react'
import { Link } from 'react-router-dom'
export default function SecondScreen() {
    return (
        <div>
            <h1>SecondScreen</h1>
            <button><Link to='/'>Frst Screen</Link></button>
        </div>
    )
}
