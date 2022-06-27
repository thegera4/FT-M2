import React from 'react';
import { connect } from 'react-redux';
import { getAllUserPosts } from '../../actions/index';
import { Link } from 'react-router-dom'
import './UserPosts.css';

export class UserPosts extends React.Component {

  
  componentDidMount(){
    // manera convencional
    const userid = this.props.match.params.id;
    this.props.getAllUserPosts(userid);
    console.log(this.props)
  }



  
  render() {
    
   
    return (
      <div className="details">
        {this.props.userPosts.map(post => (
          <Link to={`/user/${post.userId}/post/${post.id}/coments`}>
            <p>{post.title}</p>
          </Link>
        ))}
        
      </div>
    )
  }
}

export function mapStateToProps(state) {
  return {
    userPosts: state.userPosts
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    getAllUserPosts: (id) => dispatch(getAllUserPosts(id)),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(UserPosts);