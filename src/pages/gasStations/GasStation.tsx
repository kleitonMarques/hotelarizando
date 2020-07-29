import React from 'react'

import './gasStation.scss'

import Header from '../../shared/header/Header'
import AppMap from '../../shared/appMap/AppMap'

const GasStation = () => {
    return (
        <div className="app-body">
            <Header />
            <AppMap />
        </div>
    )
}

export default GasStation