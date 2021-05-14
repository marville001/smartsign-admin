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
    width: "calc(100% - 20px)",
    margin: "10px",
  },
  listItem: {
    padding: " 5px 10px",
  },
}));

const MenuItem = ({ name, icon: Icon, classes, to }) => (
  <ListItem
    button
    aria-haspopup="true"
    aria-controls="lock-menu"
    aria-label={name}
    href={to}
    component="a"
  >
    <IconButton
      edge="start"
      className={classes.listItem}
      color="inherit"
      aria-label="menu"
    >
      <Icon />
    </IconButton>
    <ListItemText primary={name} />
  </ListItem>
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
      <Button
        href="/users/new"
        endIcon={<AddIcon />}
        className={classes.add}
        variant="contained"
        color="primary"
      >
        Add User
      </Button>
      <List component="nav">
        <MenuItem name="Dashboard" to="/" icon={MenuIcon} classes={classes} />
        <MenuItem name="Users" to="/users" icon={MenuIcon} classes={classes} />
        <MenuItem name="Profile" to="/users/new" icon={AccountCircleIcon} classes={classes} />
      </List>
    </div>
  );
};

export default Sidebar;
