import React from 'react'

import './hospitals.scss'

import Header from '../../shared/header/Header'
import AppMap from '../../shared/appMap/AppMap'
import SideMenu from '../../shared/sideMenu/SideMenu'

const Hospitals = () => {
    return (
        <div className="app-body">
            <Header />
            <AppMap>
                <SideMenu />
            </AppMap>
        </div>
    )
}

export default Hospitals