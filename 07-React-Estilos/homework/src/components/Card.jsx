import React from 'react';
import style from '../stylesheets/Card.modules.css'

export default function Card(props) {
  // acá va tu código
  return <div className="card-container">
  <h2>{props.name}</h2>
  <button className="close-card-btn" onClick={props.onClose}>X</button>
  <div className="card-info-container">
    <div className="min-temp-container">
      <p><strong>Min</strong></p>
      <p>{props.min}</p>
    </div>
    <div className="max-temp-container">
      <p><strong>Max</strong></p>
      <p>{props.max}</p>
    </div>
    <div className="weather-icon-container">
      <img 
      src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} 
      alt={`Weather icon of ${props.name}`}/>
    </div>
  </div>
</div>
};