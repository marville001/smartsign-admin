import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#eee",
    padding:"10px 20px"
  },
}));

const Breadcrumb = ({content}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3>{content?content:"/"}</h3>
      
    </div>
  );
};

export default Breadcrumb;
