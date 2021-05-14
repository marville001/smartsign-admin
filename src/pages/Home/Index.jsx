import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Switch, Route,Redirect } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  container: {
    flexGrow: 1,
  },
}));

const Dashboard = React.lazy(() => import("./Dashboard"));
const Users = React.lazy(() => import("./Users"));
const AddUser = React.lazy(() => import("./AddUser"));

const Index = () => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className={classes.root}>
      <Sidebar menuOpen={menuOpen} />
      <div className={classes.container}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <React.Suspense fallback={() => <div>loading...</div>}>
          <Switch>
            <Route
              exact
              path="/"
              name="Dashboard"
              render={(props) => <Dashboard {...props} />}
            />
            <Route
              exact
              path="/users"
              name="Users"
              render={(props) => <Users {...props} />}
            />
            <Route
              exact
              path="/users/new"
              name="Add User"
              render={(props) => <AddUser {...props} />}
            />
            <Redirect from="/home" to="/" />
          </Switch>
        </React.Suspense>
      </div>
    </div>
  );
};
export default Index;
