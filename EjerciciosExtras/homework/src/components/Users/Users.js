import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../actions/index';
import Buscador from "../Buscador/Buscador";
import './Users.css';

export class Users extends Component {
   
  componentDidMount(){
    this.props.getAllUsers();
  }

  render() {
    console.log(this.props);
    return (
      <div className="details">
        <h4 className="title">Usuarios del blog</h4>
        {/* Aqui deberias poner tu lista de usuarios! */}
        <div>
          {this.props.users.map(user => (
            <Link to={`/users/${user.id}/posts`}> 
            <p>{user.name}</p>
            </Link>
          ))
          }
        </div>
            
              
              
            
         
           
        
      </div>
    );
  }
}

export function mapStateToProps(state){
  return {
    users: state.users
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    getAllUsers: () => dispatch(getAllUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

