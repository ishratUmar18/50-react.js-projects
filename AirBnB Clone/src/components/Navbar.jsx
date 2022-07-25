import React from 'react';
import logo from '../assets//airbnb1.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='nav--logo'/>
        </nav>
    )
}