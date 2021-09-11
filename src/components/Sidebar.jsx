import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

const usestyles = makeStyles(() => ({
  root: {
    height: "90vh",
    transition: "all .3s",
    borderRight: "2px solid #eee",
    minWidth: "200px",
  },
  logo: {
    textAlign: "center",
    padding: "17px 0",
    fontSize: "25px",
    borderBottom: "2px solid #eee",
  },
  add: {
    display:"block",
    margin: "10px",
    background: "#3F51B5",
    color:"#fff",
    textAlign:"center",
    padding: "10px",
    borderRadius:"10px"
  },
  listItem: {
    padding: " 5px 10px",
    display:"flex"
  },
  listItemIcon: {
    padding: " 5px 10px",
  },
}));

const MenuItem = ({ name, icon: Icon, classes, to }) => (
    <Link to={to} className={classes.listItem}>
      <IconButton
        edge="start"
        className={classes.listItemIcon}
        color="inherit"
        aria-label="menu"
      >
        <Icon />
      </IconButton>
      <ListItemText primary={name} />
    </Link>
);

const Sidebar = ({ menuOpen }) => {
  const classes = usestyles();
  return (
    <div
      className={classes.root}
      style={{
        display: menuOpen ? "block" : "none",
        transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
      }}
    >
      <h4 className={classes.logo}>Smart Sign</h4>
      <Link
        to="/users/new"
        endIcon={<AddIcon />}
        className={classes.add}
        variant="contained"
        color="primary"
      >
        Add User
      </Link>
      <List component="nav">
        <MenuItem name="Dashboard" to="/" icon={MenuIcon} classes={classes} />
        <MenuItem name="Users" to="/users" icon={MenuIcon} classes={classes} />
        <MenuItem
          name="Profile"
          to="/users/profile"
          icon={AccountCircleIcon}
          classes={classes}
        />
        <MenuItem
          name="Reports"
          to="/reports"
          icon={AccountCircleIcon}
          classes={classes}
        />
        <MenuItem
          name="Vehicles"
          to="/vehicles"
          icon={AccountCircleIcon}
          classes={classes}
        />
        <MenuItem
          name="Vehicle Signin"
          to="/vehicles/signin"
          icon={AccountCircleIcon}
          classes={classes}
        />
      </List>
    </div>
  );
};

export default Sidebar;
