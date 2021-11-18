import React from 'react'
import SearchBar from 'components/SearchBar'
import "styling/navbar.css"
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="navbar-onboard">
            <Link to="/" className="nav-title-onboard">
                onBoard
            </Link>
            <div className="navbar-search">
                <SearchBar curUrl="nav" />
            </div>
            <div className="nav-content-onboard">
                <div className="navbar-btn-onboard">
                    Log In
                </div>
                <div className="navbar-btn-onboard">
                    Register
                </div>
            </div>
        </div>
    )
}

export default NavBar
