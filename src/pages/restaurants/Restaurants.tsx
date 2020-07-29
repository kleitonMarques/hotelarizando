import React from 'react'

import './restaurants.scss'

import Header from '../../shared/header/Header'
import AppMap from '../../shared/appMap/AppMap'

const Restaurants = () => {
    return (
        <div className="app-body">
            <Header />
            <AppMap />
        </div>
    )
}

export default Restaurants