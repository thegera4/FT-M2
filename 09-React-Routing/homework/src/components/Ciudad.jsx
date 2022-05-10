import React from 'react'
import './Ciudad.css';
//import { useParams } from 'react-router-dom'

export default function Ciudad({city}) {

    //const { id } = useParams();
    //useEffect --> fetch('..../id') -- Estado

    if(!city) return <h2>City not found</h2>
  return (
    <div className="main-container">
        <h2>{`Weather details of ${city.name}`}</h2>
        <div className="info">
            <div>Temp: {city.temp} ºC</div>
            <div>Weather: {city.weather}</div>
            <div>Wind: {city.wind} km/h</div>
            <div>Clouds: {city.clouds}</div>
            <div>Lat: {city.latitud}º</div>
            <div>Long: {city.longitud}º</div>
        </div>
    </div>
  )
}
