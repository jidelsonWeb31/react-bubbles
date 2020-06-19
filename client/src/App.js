import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import ColorList from "./components/ColorList";

function App() {
  return (
    <Router>
      <div className="App">

    <Switch>
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}

        <PrivateRoute 
        path="/protected"
        component = {BubblePage}
         />
</Switch>
      </div>
    </Router>
  );
}

export default App;
