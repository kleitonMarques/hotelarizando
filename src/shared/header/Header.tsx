import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './header.css'

const Header = () => {
    return (
        <div className="app-top">
            <header className="app-menu">
                <div className="space-logo">HOTELARIZANDO</div>
                <div className="list-menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Produtos</Link></li>
                        <li><Link to="/products">Produção</Link></li>
                        <li><Link to="/products">Instalações</Link></li>
                        <li><Link to="/products">Contato</Link></li>
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