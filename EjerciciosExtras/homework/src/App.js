import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Users from "./components/Users/Users";
import UserPosts from "./components/UserPosts/UserPosts";
import CommentsPosts from "./components/CommentsPost/CommentsPost";
import Buscador from "./components/Buscador/Buscador";



function App() {
  
  return (
      <React.Fragment>
         <NavBar/>
          <Route exact path="/" component={Users} ></Route>
          <Route path="/users/:id/posts" component={UserPosts} ></Route>
          <Route path="/user/:userid/post/:id/coments" component={CommentsPosts}/>
        
      </React.Fragment>
  )
}

export default App
