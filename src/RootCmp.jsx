import "./styles/main.scss";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./cmps/Header.jsx";
import { HomePage } from "./pages/HomePage.jsx";
// import { postService } from "./services/post.service.js";

export function RootCmp() {
  // useEffect(() => {
  //   postService.getPosts();
  // }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route component={HomePage} path='/'/>
        </Switch>
      </main>

      <footer></footer>
    </div>
  );
}
