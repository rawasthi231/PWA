import React from "react";
import Navigation from "./components/navbar";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/home";
import Users from "./components/users";
import About from "./components/about";
import VodeoCalling from "./components/videoCall";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route component={Users} path="/users"></Route>
          <Route component={About} path="/about"></Route>
          <Route component={VodeoCalling} path="/video-call"></Route>
          <Route component={Home} path="/"></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
