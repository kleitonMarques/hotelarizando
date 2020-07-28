import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './header.css'

const Header = () => {
    return (
        <div className="app-top">
            <header className="app-menu">
                <div className="space-logo">
                    <Link to="/" className="linkLogo">
                        HOTELARIZANDO
                    </Link>
                </div>
                <div className="list-menu">
                    <ul>
                        <li><Link to="/">Hospedagens</Link></li>
                        <li><Link to="/restaurantes">Restaurantes</Link></li>
                        <li><Link to="/postosDeCombustiveis">Postos de combustível</Link></li>
                        <li><Link to="/hospitais">Hospitais</Link></li>
                    </ul>
                </div>
                <div className="space-menu-users">
                    Usuário
                    <span><FiChevronDown /></span>
                </div>
            </header>
        </div>
    )
}

export default Header