import React, { useContext, useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import { AuthContext } from "./AuthContext";

const Login = React.lazy(() => import("./pages/Login"));
const Index = React.lazy(() => import("./pages/Home/Index"));

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <React.Suspense fallback={() => <div>Loading...</div>}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Index} />
      </Switch>
    </React.Suspense>
  );
};

export default App;
