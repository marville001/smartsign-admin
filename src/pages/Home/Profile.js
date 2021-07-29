import {
  Container,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import Breadcrumb from "../../components/Breadcrumb";
import { auth } from "../../firebase";

const useStyles = makeStyles(() => ({
  container: {
    padding: "20px",
  }, content: {
    width: "400px",
    display: "flex",
    justifyContent: "space-between",
    margin: "10px"
  },
  contentSpan: {
    fontWeight: 400,
    color: "#3f51b5"
  }
}));
const Profile = () => {
  const classes = useStyles();

  const { users } = useContext(AuthContext);
  const [user, setUser] = useState({})
  const u = users.filter((user) => user.id === auth.currentUser.uid)[0];

  useEffect(() => {
    setUser(u)
  }, [u])

  return (
    <div>
      <Breadcrumb content="Profile" />
      <Container className={classes.container}>
        <div className={classes.cards}>
          <h2 className={classes.content}>FirstName  <span className={classes.contentSpan}>{user?.firstname}</span></h2>
          <h2 className={classes.content}>LastName  <span className={classes.contentSpan}>{user?.lastname}</span></h2>
          <h2 className={classes.content}>Email  <span className={classes.contentSpan}>{user?.email}</span></h2>
          <h2 className={classes.content}>Role  <span className={classes.contentSpan}>{user?.role}</span></h2>
          <h2 className={classes.content}>Status <span className={classes.contentSpan}>{user?.status}</span></h2>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
