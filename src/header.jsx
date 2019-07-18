import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
    <nav className="navbar navbar-expand navbar-light bg-light">
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
        </ul>
    </nav>
)

export default Header