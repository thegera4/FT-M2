import React from 'react'
import './Ciudad.css';
import { FaTemperatureHigh,FaWind } from 'react-icons/fa';
import { BsClouds } from 'react-icons/bs';
import { TiLocationOutline, TiLocation, TiWeatherPartlySunny } from 'react-icons/ti';
//import { useParams } from 'react-router-dom'

export default function Ciudad({city}) {

    //const { id } = useParams();
    //useEffect --> fetch('..../id') -- Estado

  if(!city) return <h2>City not found</h2>
  return (
    <div className="main-container">
        <h2>{`Weather details of ${city.name}`}</h2>
        <div className="info">
            <div>
                <FaTemperatureHigh /><br></br> 
                Temp: {city.temp} ºC
            </div>
            <div>
                <TiWeatherPartlySunny /><br></br>
                Weather: {city.weather}
            </div>
            <div>
                <FaWind /><br></br> 
                Wind: {city.wind} km/h
            </div>
            <div>
                <BsClouds /><br></br>
                Clouds: {city.clouds}
            </div>
            <div>
                <TiLocationOutline /><br></br>
                Lat: {city.latitud}º</div>
            <div>
                <TiLocation /><br></br>
                Long: {city.longitud}º
            </div>
        </div>
    </div>
  )
}
