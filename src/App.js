import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Index from "./pages/Home/Index";

const App = () => (
  <Switch>
    <Route path="/" component={Index} />
    <Route exact path="/login" component={Login} />
  </Switch>
);

export default App;
