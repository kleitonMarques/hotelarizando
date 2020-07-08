import React from 'react'
import { Route, BrowserRouter, Redirect } from 'react-router-dom'

import Home from './pages/home/Home'
import GasStation from './pages/gasStations/GasStation'
import Hospitals from './pages/hospitals/Hospitals'
import Restaurants from './pages/restaurants/Restaurants'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Restaurants} path="/restaurantes" />
            <Route component={GasStation} path="/postosDeCombustiveis" />
            <Route component={Hospitals} path="/hospitais" />
            <Redirect from="*" to="/" />
        </BrowserRouter>
    )
}

export default Routes
