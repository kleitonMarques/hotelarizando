import React from 'react'

import { Link } from 'react-router-dom'

import './header.css'

const Header = () => {
    return (
        <div className="app-top">
            <header className="app-menu">
                <div>Hotelarizando</div>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">products</Link></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div>usuarios</div>
            </header>
        </div>
    )
}

export default Header