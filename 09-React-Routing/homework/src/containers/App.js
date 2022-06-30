import React, { useState } from 'react';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import { Route, Switch } from 'react-router-dom'; // react-router-dom@5.3.0
import About from '../components/About';
import Ciudad from '../components/Ciudad';

function App() {
  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  /*function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("City not found");
        }
      });
  }*/

  async function onSearch(ciudad) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
    const recurso = await response.json();
    try{
      if(recurso.main !== undefined){
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        setCities(oldCities => [...oldCities, ciudad]);
      }
    } catch(error){
        alert("City not found " + error);
    }
  }



  function onFilter(ciudadId) {
    let ciudad = cities.find(ciudad => ciudad.id === parseInt(ciudadId));
    return ciudad;
    // let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    // if(ciudad.length > 0) {
    //     return ciudad[0];
    // } else {
    //     return null;
    // }
  }
  return (
      <div className="App">
        <Nav onSearch={onSearch}/>
          <Switch>
            <Route exact path="/">
            <div>
              <Cards
                cities={cities}
                onClose={onClose}
              />
            </div>
            </Route>
            {/*legacy de Home*/}
            {/* <Route 
              exact path="/" 
              render={() => <Cards cities={cities} onClose={onClose} />}
            /> */} 
            <Route path="/about">
              <About />
            </Route>
            {/*legacy de About*/}
            {/* <Route 
              path="/about" 
              component={About}
            /> */} 
            <Route 
            path="/ciudad/:id"
            render={({match}) => <Ciudad city={onFilter(match.params.id)} />}>
            </Route>
            {/* <Route path="/ciudad/:id">
              <Ciudad />
            </Route> */}
          </Switch>
      </div>
    
  );
}

export default App;
