import React from 'react'
import { Route, BrowserRouter, Redirect } from 'react-router-dom'

import Home from './pages/home/Home'
import Atracoes from './pages/atracoes/Atracoes'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Atracoes} path="/atracoes" />
            <Redirect from="*" to="/" />
        </BrowserRouter>
    )
}

export default Routes
