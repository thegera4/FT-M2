import React from 'react'
import './About.css';

export default function About() {
  return (
    <div className="about-main-container">
      <div className="instructions">
        <p>App instructions:</p>
        <p>1. Enter a city name in the search bar.</p>
        <p>2. Click on the city name to see the weather forecast.</p>
      </div>
      <div className="pic-container"><img src="https://avatars.githubusercontent.com/u/84020433?v=4" alt="Author" /></div>
      <h3>Created by: <a href="https://github.com/thegera4" target="_blank" rel="noreferrer">Juan Gerardo Medellin Ibarra</a></h3>
      <p>For <a href="https://www.soyhenry.com" target="_blank" rel="noreferrer">Henry bootcamp</a></p>
    </div>
  )
}
