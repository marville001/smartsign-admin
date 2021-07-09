import {
    Card,
    Container,
    IconButton,
    makeStyles,
  } from "@material-ui/core";
  import React from "react";
  import Breadcrumb from "../../components/Breadcrumb";
  import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
  import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
  import InputIcon from '@material-ui/icons/Input';
  
  const useStyles = makeStyles(() => ({
    container: {
      padding: "20px",
    },
    cards: {
      display: "flex",
      flexWrap: "wrap",
    },
    card: {
      minWidth: "250px",
      margin: "10px 5px",
      display: "flex",
      alignItems: "center",
      padding: "10px 20px",
    },
    cardIcon: {
      width: "60px",
      height: "60px",
      backgroundColor: "#eee",
      margin: "20px 10px",
      cursor:"default",
      marginRight:"20px"
    },
  }));  
  const VehicleSignIn = () => {
    const classes = useStyles();
  
    return (
      <div>
        <Breadcrumb content="Vehicle SignIn Records" />
        <Container className={classes.container}>
          <div className={classes.cards}>
          
          </div>
        </Container>
      </div>
    );
  };
  
  export default VehicleSignIn;
  