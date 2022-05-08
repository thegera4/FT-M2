import React from 'react';
import './Card.css';

//componente funcional
// export default function Card ({min, max, name, img, onClose}) {
//     return (
//       <div className="card">
//           <div id="closeIcon" className="row">
//               <button onClick={onClose} className="closeCardBtn">X</button>
//           </div>
//           <div className="card-body">
//             <h5 className="card-title">{name}</h5>
//             <div className="row">
//               <div className="col-sm-4 col-md-4 col-lg-4">
//                 <p>Min</p>
//                 <p>{min}°</p>
//               </div>
//               <div className="col-sm-4 col-md-4 col-lg-4">
//                 <p>Max</p>
//                 <p>{max}°</p>
//               </div>
//               <div className="col-sm-4 col-md-4 col-lg-4">
//                 <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
//               </div>
//             </div>
//           </div>
//       </div>
      
//     );
// };

//componente de clase
export default class Card extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className="card">
        <div id="closeIcon" className="row">
          <button onClick={this.props.onClose} className="closeCardBtn">X</button>
        </div>
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{this.props.min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{this.props.max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+this.props.img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
