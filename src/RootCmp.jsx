import "./styles/main.scss";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./cmps/Header.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { LoginSignup } from "./pages/LoginSignup.jsx";
import { PostDetails } from "./pages/PostDetails";
// import { postService } from "./services/post.service.js";

export function RootCmp() {
  // useEffect(() => {
  //   postService.getPosts();
  // }, []);

  return (
    <div className="App">
     <Switch>
        <Route path='/login' />
        <Route component={Header} path='/' />
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
