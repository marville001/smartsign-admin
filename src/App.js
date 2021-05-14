import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const Login = React.lazy(() => import("./pages/Login"));
const Index = React.lazy(() => import("./pages/Home/Index"));

const App = () => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <React.Suspense fallback={() => <div>Loading...</div>}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute path="/" isAuth={isAuth} component={Index} />
      </Switch>
    </React.Suspense>
  );
};

export default App;
