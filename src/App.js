import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Index from "./pages/Home/Index";

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route path="/" component={Index} />
  </Switch>
);

export default App;
