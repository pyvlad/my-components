import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink exact className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/clock">Clock</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/page2">Page2</NavLink>
                </li>
            </ul>
        </div>
    </nav>
)

export default Header