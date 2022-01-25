import "./styles/main.scss";
import React, { useEffect } from "react";
import { Route, Switch,useParams } from "react-router-dom";
import { Header } from "./cmps/Header.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { LoginSignup } from "./pages/LoginSignup.jsx";
import { PostDetails } from "./pages/PostDetails";
import { AddPost } from "./cmps/AddPost.jsx"; 
// import { postService } from "./services/post.service.js";

export function RootCmp(props) {
  useEffect(() => {
    console.log(props)
    // postService.getPosts();
  });


  return (
    <div className="App">
     <Switch>
        <Route path='/login' />
        <Route component={Header} path='/' />
        {/* <Route component={AddPost} path='/create' />
        <Route component={AddPost} path='/:p/create' />
        <Route component={AddPost} path='/:p/:postId/create' />
        <Route component={AddPost} path='/profile/create' /> */}
      </Switch>
      <main>
        <Switch>
          <Route component={PostDetails} path='/p/:postId'/>
          <Route component={LoginSignup} path='/login'/>
          <Route component={HomePage} path='/'/>
        </Switch>
      </main>

      <footer></footer>
    </div>
  );
}
