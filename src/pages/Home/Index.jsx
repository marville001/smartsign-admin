import { makeStyles } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { auth, db } from "../../firebase";

import Dashboard from "./Dashboard";
import Users from "./Users";
import AddUser from "./AddUser";
import Profile from "./Profile";
import Reports from "./Reports";
import Vehicles from "./Vehicles";
import VehicleSignIn from "./VehicleSignIn";
import VehicleDetails from "./VehicleDetails";
import EditUser from "./EditUser";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  container: {
    flexGrow: 1,
  },
}));

const Index = ({ history }) => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(true);

  const { user, setUsers, setVehicles,setSignedVehicles } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      history.push("/login");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  
  useEffect(() => {
    const usersRef = db.ref("Users");
    usersRef.on("value", (snapshot) => {
      const users = snapshot.val();
      const usersList = [];
      for (let id in users) {
        usersList.push({ id, ...users[id] });
      }

      setUsers(usersList);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(auth.currentUser.uid);

  useEffect(() => {
    const vehiclesRef = db.ref("Vehicles");
    vehiclesRef.on("value", (snapshot) => {
      const vehicles = snapshot.val();
      const vehiclesList = [];
      for (let id in vehicles) {
        vehiclesList.push({ id, ...vehicles[id] });
      }
      setVehicles(vehiclesList);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const sVehiclesRef = db.ref("SignedVehicles");
    sVehiclesRef.on("value", (snapshot) => {
      const vehicles = snapshot.val();
      const vehiclesList = [];
      for (let id in vehicles) {
        vehiclesList.push({ id, ...vehicles[id] });
      }
      setSignedVehicles(vehiclesList);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      <Sidebar menuOpen={menuOpen} />
      <div className={classes.container}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
          <Route
            exact
            path="/users/profile"
            name="Profile"
            render={(props) => <Profile {...props} />}
          />
          <Route
            exact
            path="/users/edit/:id"
            name="EditUser"
            render={(props) => <EditUser {...props} />}
          />
          <Route
            exact
            path="/reports"
            name="Reports"
            render={(props) => <Reports {...props} />}
          />
          <Route
            exact
            path="/vehicles"
            name="Vehicles"
            render={(props) => <Vehicles {...props} />}
          />
          <Route
            exact
            path="/vehicles/details/:id"
            name="VehicleDetails"
            render={(props) => <VehicleDetails {...props} />}
          />
          <Route
            exact
            path="/vehicles/signin"
            name="VehicleSIgnIn"
            render={(props) => <VehicleSignIn {...props} />}
          />
          <Redirect from="/home" to="/" />
        </Switch>
      </div>
    </div>
  );
};
export default Index;
