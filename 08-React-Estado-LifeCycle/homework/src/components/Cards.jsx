import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

//componente funcional
// export default function Cards({cities, onClose}) {
//   if(cities){
//     return (
//       <div className='cards'>
//         {cities.map(c => 
//         <Card
//           key={c.id}
//           id={c.id}
//           max={c.max}
//           min={c.min}
//           name={c.name}
//           img={c.img}
//           onClose={() => onClose(c.id)}
//         /> )}
//       </div>
//     );
//   } else {
//     return(
//       <div>Please search and add a city..</div>
//     )
//   }
// }

//componente de clase
export default class Cards extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render(){
    if(this.props.cities){
          return (
            <div className='cards'>
              {this.props.cities.map(city => 
              <Card
                key={city.id}
                id={city.id}
                max={city.max}
                min={city.min}
                name={city.name}
                img={city.img}
                onClose={() => this.props.onClose(city.id)}
              /> )}
            </div>
          );
        } else {
          return(
            <div>Please search and add a city..</div>
          )
        }
  }
}
