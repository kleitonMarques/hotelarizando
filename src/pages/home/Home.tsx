import React from 'react'

import './home.css'

import Header from '../../shared/header/Header'
import AppMap from '../../shared/appMap/AppMap'

const Home = () => {
    return (
        <div className="app-body">
            <Header />
            <AppMap>
                <div className="app-content-base">Aqui é home</div>
            </AppMap>
            
        </div>
    )
}

export default Home