import React from 'react'

import './hospitals.scss'

import Header from '../../shared/header/Header'
import AppMap from '../../shared/appMap/AppMap'

const Hospitals = () => {
    return (
        <div className="app-body">
            <Header />
            <AppMap />
        </div>
    )
}

export default Hospitals