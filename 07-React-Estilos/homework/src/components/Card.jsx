import React from 'react';
import style from '../stylesheets/Card.module.css'

export default function Card(props) {
  // acá va tu código
  return <div className={style.cardContainer}>
  <h2>{props.name}</h2>
  <button className={style.closeCardBtn} onClick={props.onClose}>X</button>
  <div className={style.cardInfoContainer}>
    <div className={style.minTempContainer}>
      <p><strong>Min</strong></p>
      <p>{props.min}</p>
    </div>
    <div className={style.maxTempContainer}>
      <p><strong>Max</strong></p>
      <p>{props.max}</p>
    </div>
    <div className={style.weatherIconContainer}>
      <img 
      src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} 
      alt={`Weather icon of ${props.name}`}/>
    </div>
  </div>
</div>
};