import React from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'

import Header from '../../shared/header/Header'

import './home.css'

const Home = () => {
    return (
        <div className="app-body">
            <Header />
            <div className="app-map">
                <Map center={[-23.5120569, -46.9522795]} zoom={15}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-23.5120569, -46.9522795]} />
                </Map>
            </div>
            
            
            
            
            {/* <div className="app-content-base">Aqui é home</div> */}
        </div>
    )
}

export default Home