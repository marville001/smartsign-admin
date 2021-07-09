import React from "react";
import { Switch, Route } from "react-router-dom";


const Login = React.lazy(() => import("./pages/Login"));
const Index = React.lazy(() => import("./pages/Home/Index"));

const App = () => {

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
