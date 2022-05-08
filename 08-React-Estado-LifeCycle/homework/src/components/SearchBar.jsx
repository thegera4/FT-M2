import React from "react";
//import { useState } from "react";
import './SearchBar.css';

//componente funcional
// export default function SearchBar({onSearch}) {

//   const [city, setCity] = useState("");

//   const inputChange = (e) => {
//     e.preventDefault();
//     setCity(e.target.value);
//   }

//   return (
//     <form className="searchBar" onSubmit={(e) => {
//       e.preventDefault();
//       onSearch(city);
//       setCity("");
//       document.querySelector(".form-control").value = "";
//     }}>
//       <input 
//       type="text" placeholder="City..." 
//       className="form-control mr-sm-2"
//       onChange={(e) => inputChange(e)}  
//       />
//       <button 
//       type="submit" 
//       className="btn btn-outline-light my-2 my-sm-0 search-btn"
//       >
//         <span> Add </span>
//       </button>
//     </form>
//   );
// }

//componente de clase
export default class SearchBar extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {
      city: ""
    }
  }

  inputChange = (e) => {
    e.preventDefault();
    this.setState({city: e.target.value});
  }

  render(){
    return(
      <form className="searchBar" onSubmit={(e) => {
        e.preventDefault();
        this.props.onSearch(this.state.city);
        this.setState({city: ""});
        document.querySelector(".form-control").value = "";
      }}>
        <input 
          type="text" placeholder="City..." 
          className="form-control mr-sm-2"
          onChange={(e) => this.inputChange(e)}  
        />
        <button 
          type="submit" 
          className="btn btn-outline-light my-2 my-sm-0 search-btn"
        >
          <span> Add </span>
        </button>
      </form>
    );
  }
}