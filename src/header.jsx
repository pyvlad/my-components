import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
    <nav className="navbar navbar-expand navbar-light bg-light" style={{marginBottom: 10}}>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink exact className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/clock">Clock</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/timer">Timer</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/table">Table</NavLink>
            </li>
        </ul>
    </nav>
)

export default Header