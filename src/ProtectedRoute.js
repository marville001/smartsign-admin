import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

const ProtectedRoute = ({ isAuth, component: Component,history, ...rest }) => {
    if(!isAuth){
        history.push("/login")
    }
    return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default withRouter(ProtectedRoute);
