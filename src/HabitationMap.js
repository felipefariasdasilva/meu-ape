import React from 'react'
import {Map, TileLayer, Marker} from 'react-leaflet'

export default function HabitationMap() {

    const position ={
        lat: 51.505,
        lng: -0.09,
    }

    return (
        <div>
            <Map center={position} zoom={13}>
                <TileLayer 
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={position} />
            </Map>
        </div>
    )
}
