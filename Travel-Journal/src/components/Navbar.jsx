import React from 'react';
import logo from '/images/Fill213.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='nav--logo'/>
            <h1 className="nav--text">my travel journal.</h1>
        </nav>
    )
}