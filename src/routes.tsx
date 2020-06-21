import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/home/Home'
import Products from './pages/products/Products'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Products} path="/products" />
        </BrowserRouter>
    )
}

export default Routes
