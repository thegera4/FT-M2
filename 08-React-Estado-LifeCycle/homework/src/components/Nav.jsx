import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

//componente funcional
// function Nav({onSearch}) {
//   return (
//     <nav className="navbar navbar-dark bg-primary">
//       <div className="logo-container">
//         <img src={Logo} alt="App Logo" />
//       </div>
//       <p className="app-title">Henry - Weather App</p>
//       <SearchBar onSearch={onSearch}/>
//     </nav>
//   );
// };

//componente de clase
class Nav extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="logo-container">
          <img src={Logo} alt="App Logo" />
        </div>
        <p className="app-title">Henry - Weather App</p>
        <SearchBar onSearch={this.props.onSearch}/>
      </nav>
    );
  }
}

export default Nav;
