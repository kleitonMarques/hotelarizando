import React from 'react'

import './home.scss'

import Header from '../../shared/header/Header'
import AppMap from '../../shared/appMap/AppMap'
import SideMenu from '../../shared/sideMenu/SideMenu'

const Home = () => {
    return (
        <div className="app-body">
            <Header />
            <AppMap>
                <SideMenu />
            </AppMap>
        </div>
    )
}

export default Home