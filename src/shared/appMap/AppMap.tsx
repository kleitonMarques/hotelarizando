import React from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'

import './appMap.css'

const AppMap = () => {
    return (
        <div className="app-map">
            <Map center={[-23.5120569, -46.9522795]} zoom={15}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-23.5120569, -46.9522795]} />
            </Map>
        </div>
    )
}

export default AppMap