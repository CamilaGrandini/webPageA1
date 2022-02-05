import React from "react";

import './style.css'

const Header = () => {

    return (
        <header className="header">
            <div className='menu-container'>
                <ul className='menu'>
                    <li className='menu-item'>
                        <a href='/'> Home</a></li>
                    <li className='menu-item'>
                        <a href="/">About Us</a>
                    </li>
                    <li className='menu-item'>
                        <a href="/">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>

            <div className="logout">
                <button href="/">Logout</button>
            </div>
        </header>
    )
}

export default Header;