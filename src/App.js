import React from "react";
import Navigation from "./components/navbar";
import "./App.css";
import { Route, BrowserRouter as Router, Switch, withRouter } from "react-router-dom";
import Home from "./components/home";
import Users from "./components/users";
import AddUser from "./components/add_user";
import EditUser from "./components/edit_user";
import About from "./components/about";
import Chat from "./components/chat";
//import VodeoCalling from "./components/videoCall";

// const store = createStore(rootReducer);
// store.getState();
// store.dispatch({type:'ITEMS_REQUEST'});
// store.subscribe(()=>{ console.log(store.getState());});
// const unsubscribe = store.subscribe(()=>{console.log(store.getState());});
// unsubscribe();



function App({location}) {
  console.log(location);
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route component={Users} path="/users"></Route>
          <Route component={AddUser} path="/add_users"></Route>
          <Route component={EditUser} path="/edit_user"></Route>
          <Route component={About} path="/about"></Route>
          <Route component={Chat} path="/chat"></Route>
          {/*<Route component={VodeoCalling} path="/video-call"></Route>*/}
          <Route component={Home} exact path="/"></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default withRouter(App);
