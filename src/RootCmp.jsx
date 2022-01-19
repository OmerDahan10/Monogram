import "./styles/main.scss";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./cmps/Header.jsx";

export function RootCmp() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route></Route>
        </Switch>
      </main>

      <footer></footer>
    </div>
  );
}
